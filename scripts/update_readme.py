#!/usr/bin/env python3
import json, os, sys, datetime, urllib.request, urllib.error, re
from pathlib import Path

GITHUB_USERNAME = os.getenv("GITHUB_USERNAME", "Ayu5h576")
GITHUB_TOKEN    = os.getenv("GITHUB_TOKEN", "")
README_PATH     = Path("README.md")
DATA_DIR        = Path("readme-data")

TODAY = datetime.date.today()
DAY_INDEX = (TODAY - datetime.date(2024, 1, 1)).days

def github_request(endpoint: str):
    url = f"https://api.github.com{endpoint}"
    req = urllib.request.Request(url)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", "2022-11-28")
    if GITHUB_TOKEN:
        req.add_header("Authorization", f"Bearer {GITHUB_TOKEN}")
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"  [WARN] GitHub API {endpoint} -> {e}", file=sys.stderr)
        return None

def load_json(path: Path):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"  [WARN] Could not load {path}: {e}", file=sys.stderr)
        return None

def load_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8").strip()
    except Exception as e:
        print(f"  [WARN] Could not load {path}: {e}", file=sys.stderr)
        return ""

def replace_section(readme: str, section_name: str, new_content: str) -> str:
    pattern = (
        rf"(<!-- START_SECTION:{re.escape(section_name)} -->)"
        rf".*?"
        rf"(<!-- END_SECTION:{re.escape(section_name)} -->)"
    )
    replacement = rf"\1\n{new_content}\n\2"
    result, count = re.subn(pattern, replacement, readme, flags=re.DOTALL)
    if count == 0:
        print(f"  [WARN] Section '{section_name}' not found in README.", file=sys.stderr)
    return result

def pick_daily(items: list) -> dict:
    return items[DAY_INDEX % len(items)]

def generate_quote_section() -> str:
    quotes = load_json(DATA_DIR / "quotes.json")
    if not quotes:
        return "_Could not load quote today._"
    q = pick_daily(quotes)
    text = q.get("text", "")
    author = q.get("author", "")
    return f'<div align="center">\n\n> *"{text}"*\n>\n> **— {author}**\n\n</div>'

def generate_tip_section() -> str:
    tips = load_json(DATA_DIR / "tips.json")
    if not tips:
        return "_Could not load tip today._"
    t = pick_daily(tips)
    cat = t.get("category", "")
    tip = t.get("tip", "")
    return f"**`{cat}`**\n\n> {tip}"

def generate_focus_section() -> str:
    content = load_text(DATA_DIR / "focus.md")
    return content if content else "_Focus section not available._"

def generate_activity_section() -> str:
    events = github_request(f"/users/{GITHUB_USERNAME}/events/public?per_page=10")
    if not events:
        return "- Active development on open source and AI applications."
    lines = []
    count = 0
    for event in events:
        if count >= 5:
            break
        etype = event.get("type", "")
        repo  = event.get("repo", {}).get("name", f"{GITHUB_USERNAME}/repository")
        created = event.get("created_at", "")[:10]
        if etype == "PushEvent":
            payload = event.get("payload", {})
            commits = payload.get("commits", [])
            if commits:
                msg = commits[-1].get("message", "Update").split("\n")[0][:80]
                lines.append(f"- **Push** to [`{repo}`](https://github.com/{repo}) — _{msg}_ (`{created}`)")
                count += 1
        elif etype == "CreateEvent":
            ref_type = event.get("payload", {}).get("ref_type", "repository")
            lines.append(f"- **Created** {ref_type} [`{repo}`](https://github.com/{repo}) (`{created}`)")
            count += 1
        elif etype == "PullRequestEvent":
            pr_action = event.get("payload", {}).get("action", "opened")
            pr_title  = event.get("payload", {}).get("pull_request", {}).get("title", "PR")[:60]
            lines.append(f"- **PR {pr_action}**: _{pr_title}_ in [`{repo}`](https://github.com/{repo}) (`{created}`)")
            count += 1
        elif etype == "WatchEvent":
            lines.append(f"- **Starred** [`{repo}`](https://github.com/{repo}) (`{created}`)")
            count += 1
    if not lines:
        return "- Active development on open source and AI applications."
    return "\n".join(lines)

def generate_repos_section() -> str:
    repos = github_request(f"/users/{GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=5&type=public")
    if not repos:
        return "| Repository | Description | Language | Stars | Updated |\n|:---|:---|:---:|:---:|:---:|\n| [`hime-os`](https://github.com/Ayu5h576/hime-os) | AI-powered intelligent operating system | TypeScript | ⭐ 0 | 2026-07-25 |"
    lines = []
    for repo in repos[:5]:
        name        = repo.get("name", "")
        description = (repo.get("description") or "No description provided").strip()[:80]
        stars       = repo.get("stargazers_count", 0)
        language    = repo.get("language") or "—"
        url         = repo.get("html_url", f"https://github.com/{GITHUB_USERNAME}/{name}")
        updated     = repo.get("updated_at", "")[:10]
        lines.append(f"| [`{name}`]({url}) | {description} | {language} | ⭐ {stars} | {updated} |")
    header = "| Repository | Description | Language | Stars | Updated |\n|:-----------|:------------|:--------:|:-----:|:-------:|"
    return header + "\n" + "\n".join(lines)

def generate_timestamp_section() -> str:
    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    return f"<sub>Last updated: **{now}**</sub>"

def main():
    print(f"[update_readme.py] Running for @{GITHUB_USERNAME} on {TODAY}")
    if not README_PATH.exists():
        print(f"[ERROR] {README_PATH} not found. Exiting.", file=sys.stderr)
        sys.exit(1)
    readme = README_PATH.read_text(encoding="utf-8")
    original = readme
    updates = {
        "quote":      generate_quote_section,
        "tip":        generate_tip_section,
        "focus":      generate_focus_section,
        "activity":   generate_activity_section,
        "repos":      generate_repos_section,
        "timestamp":  generate_timestamp_section,
    }
    for section_name, generator in updates.items():
        print(f"  ↳ Updating section: {section_name} ...", end=" ")
        content = generator()
        readme = replace_section(readme, section_name, content)
        print("done")
    if readme == original:
        print("[update_readme.py] No changes detected.")
    else:
        README_PATH.write_text(readme, encoding="utf-8")
        print("[update_readme.py] README.md updated successfully.")

if __name__ == "__main__":
    main()