const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const dataDir = path.join(baseDir, 'readme-data');
const scriptsDir = path.join(baseDir, 'scripts');
const workflowsDir = path.join(baseDir, '.github', 'workflows');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true });
if (!fs.existsSync(workflowsDir)) fs.mkdirSync(workflowsDir, { recursive: true });

// 1. projects.json
const projects = [
  {
    "id": "hime-os",
    "title": "HiMe OS",
    "description": "An AI-powered intelligent operating system built with modern web technologies. Features an adaptive assistant, productivity suite, and deep AI integrations — reimagining the desktop experience.",
    "status": "active",
    "featured": true,
    "technologies": ["React", "TypeScript", "Node.js", "OpenAI", "Electron", "Tailwind CSS"],
    "repo_url": "https://github.com/Ayu5h576/hime-os",
    "demo_url": "https://himeos.dev",
    "image": "https://raw.githubusercontent.com/Ayu5h576/Ayu5h576/master/assets/hime-os-preview.png",
    "stars": null,
    "category": "flagship"
  },
  {
    "id": "ai-productivity-suite",
    "title": "AI Productivity Suite",
    "description": "A collection of AI-powered tools including smart summarization, code review assistant, and transcription — built with modern APIs and a clean UI.",
    "status": "active",
    "featured": true,
    "technologies": ["Next.js", "TypeScript", "OpenAI", "Firebase", "Tailwind CSS"],
    "repo_url": "https://github.com/Ayu5h576/ai-productivity-suite",
    "demo_url": null,
    "image": null,
    "stars": null,
    "category": "ai"
  },
  {
    "id": "hime-design-system",
    "title": "HiMe Design System",
    "description": "Comprehensive design system and accessible component library powering HiMe OS. Built with Storybook and Figma tokens for seamless sync.",
    "status": "active",
    "featured": true,
    "technologies": ["React", "TypeScript", "Storybook", "Figma", "CSS Variables"],
    "repo_url": "https://github.com/Ayu5h576/hime-design-system",
    "demo_url": null,
    "image": null,
    "stars": null,
    "category": "design"
  }
];
fs.writeFileSync(path.join(dataDir, 'projects.json'), JSON.stringify(projects, null, 2), 'utf8');

// 2. focus.md
const focusMd = `<!-- CURRENT FOCUS — Edit this file to update the Current Focus section in your README -->

### What I'm Building

- **HiMe OS** — Shipping the next major release with advanced AI agent integration and a redesigned app ecosystem
- **AI Research** — Exploring multi-modal LLM capabilities and on-device inference patterns
- **HiMe Design System** — Building a world-class component library with accessibility-first principles

### What I'm Learning

- Advanced prompt engineering & AI agent architectures
- WebAssembly for high-performance browser applications
- Edge computing and serverless AI inference
- Systems design patterns for large-scale distributed applications

### Current Roadmap

| Priority | Goal | Status |
|:--------:|:-----|:------:|
| High | HiMe OS v2.0 Alpha | In Progress |
| Med | AI Productivity Suite Launch | Planning |
| Low | Open Source Contributions | Ongoing |

### 2026 Objectives

- Launch HiMe OS public beta
- Expand open-source AI ecosystem
- Author technical articles on AI application architecture
- Grow developer community around HiMe ecosystem
`;
fs.writeFileSync(path.join(dataDir, 'focus.md'), focusMd, 'utf8');

// 3. quotes.json
const quotes = [
  { "text": "First, solve the problem. Then, write the code.", "author": "John Johnson" },
  { "text": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "author": "Martin Fowler" },
  { "text": "Programs must be written for people to read, and only incidentally for machines to execute.", "author": "Harold Abelson" },
  { "text": "The best way to predict the future is to invent it.", "author": "Alan Kay" },
  { "text": "Simplicity is the soul of efficiency.", "author": "Austin Freeman" },
  { "text": "Make it work, make it right, make it fast.", "author": "Kent Beck" },
  { "text": "The most powerful tool we have as developers is automation.", "author": "Scott Hanselman" },
  { "text": "Code is like humor. When you have to explain it, it's bad.", "author": "Cory House" },
  { "text": "Talk is cheap. Show me the code.", "author": "Linus Torvalds" },
  { "text": "It is not enough to be a good programmer. You must also communicate well.", "author": "Donald Knuth" },
  { "text": "Every great developer you know got there by solving problems they were unqualified to solve until they did it.", "author": "Patrick McKenzie" },
  { "text": "Software is eating the world.", "author": "Marc Andreessen" },
  { "text": "The art of programming is the art of organizing complexity.", "author": "Edsger Dijkstra" },
  { "text": "Think twice, code once.", "author": "Unknown" },
  { "text": "Build things that matter.", "author": "Ayush Rawat" }
];
fs.writeFileSync(path.join(dataDir, 'quotes.json'), JSON.stringify(quotes, null, 2), 'utf8');

// 4. tips.json
const tips = [
  { "category": "Clean Code", "tip": "Name your variables for what they represent, not what they hold. userAge beats data every time." },
  { "category": "Git", "tip": "Commit often with meaningful messages. Describe the why, not just the what." },
  { "category": "TypeScript", "tip": "Avoid any. Use unknown instead and narrow the type explicitly — your future self will thank you." },
  { "category": "Performance", "tip": "Don't optimize prematurely. Profile first, then optimize the actual bottleneck." },
  { "category": "React", "tip": "Keep components small and focused. If a component does more than one thing, split it." },
  { "category": "API Design", "tip": "Design your API endpoints around resources and actions, not implementation details." },
  { "category": "Security", "tip": "Never store secrets in code. Use environment variables and secrets managers at runtime." },
  { "category": "CSS", "tip": "Use CSS custom properties for design tokens to maintain visual consistency." },
  { "category": "AI Engineering", "tip": "When prompting LLMs, specify output schemas explicitly for consistent JSON parsing." },
  { "category": "System Design", "tip": "Design for failure. Assume external services will fail and implement graceful degradation." }
];
fs.writeFileSync(path.join(dataDir, 'tips.json'), JSON.stringify(tips, null, 2), 'utf8');

// 5. update_readme.py
const updatePy = [
  '#!/usr/bin/env python3',
  'import json, os, sys, datetime, urllib.request, urllib.error, re',
  'from pathlib import Path',
  '',
  'GITHUB_USERNAME = os.getenv("GITHUB_USERNAME", "Ayu5h576")',
  'GITHUB_TOKEN    = os.getenv("GITHUB_TOKEN", "")',
  'README_PATH     = Path("README.md")',
  'DATA_DIR        = Path("readme-data")',
  '',
  'TODAY = datetime.date.today()',
  'DAY_INDEX = (TODAY - datetime.date(2024, 1, 1)).days',
  '',
  'def github_request(endpoint: str):',
  '    url = f"https://api.github.com{endpoint}"',
  '    req = urllib.request.Request(url)',
  '    req.add_header("Accept", "application/vnd.github+json")',
  '    req.add_header("X-GitHub-Api-Version", "2022-11-28")',
  '    if GITHUB_TOKEN:',
  '        req.add_header("Authorization", f"Bearer {GITHUB_TOKEN}")',
  '    try:',
  '        with urllib.request.urlopen(req, timeout=15) as resp:',
  '            return json.loads(resp.read().decode("utf-8"))',
  '    except Exception as e:',
  '        print(f"  [WARN] GitHub API {endpoint} -> {e}", file=sys.stderr)',
  '        return None',
  '',
  'def load_json(path: Path):',
  '    try:',
  '        with open(path, encoding="utf-8") as f:',
  '            return json.load(f)',
  '    except Exception as e:',
  '        print(f"  [WARN] Could not load {path}: {e}", file=sys.stderr)',
  '        return None',
  '',
  'def load_text(path: Path) -> str:',
  '    try:',
  '        return path.read_text(encoding="utf-8").strip()',
  '    except Exception as e:',
  '        print(f"  [WARN] Could not load {path}: {e}", file=sys.stderr)',
  '        return ""',
  '',
  'def replace_section(readme: str, section_name: str, new_content: str) -> str:',
  '    pattern = (',
  '        rf"(<!-- START_SECTION:{re.escape(section_name)} -->)"',
  '        rf".*?"',
  '        rf"(<!-- END_SECTION:{re.escape(section_name)} -->)"',
  '    )',
  '    replacement = rf"\\1\\n{new_content}\\n\\2"',
  '    result, count = re.subn(pattern, replacement, readme, flags=re.DOTALL)',
  '    if count == 0:',
  '        print(f"  [WARN] Section \'{section_name}\' not found in README.", file=sys.stderr)',
  '    return result',
  '',
  'def pick_daily(items: list) -> dict:',
  '    return items[DAY_INDEX % len(items)]',
  '',
  'def generate_quote_section() -> str:',
  '    quotes = load_json(DATA_DIR / "quotes.json")',
  '    if not quotes:',
  '        return "_Could not load quote today._"',
  '    q = pick_daily(quotes)',
  '    text = q.get("text", "")',
  '    author = q.get("author", "")',
  '    return f\'<div align="center">\\n\\n> *"{text}"*\\n>\\n> **— {author}**\\n\\n</div>\'',
  '',
  'def generate_tip_section() -> str:',
  '    tips = load_json(DATA_DIR / "tips.json")',
  '    if not tips:',
  '        return "_Could not load tip today._"',
  '    t = pick_daily(tips)',
  '    cat = t.get("category", "")',
  '    tip = t.get("tip", "")',
  '    return f"**`{cat}`**\\n\\n> {tip}"',
  '',
  'def generate_focus_section() -> str:',
  '    content = load_text(DATA_DIR / "focus.md")',
  '    return content if content else "_Focus section not available._"',
  '',
  'def generate_activity_section() -> str:',
  '    events = github_request(f"/users/{GITHUB_USERNAME}/events/public?per_page=10")',
  '    if not events:',
  '        return "- Active development on open source and AI applications."',
  '    lines = []',
  '    count = 0',
  '    for event in events:',
  '        if count >= 5:',
  '            break',
  '        etype = event.get("type", "")',
  '        repo  = event.get("repo", {}).get("name", f"{GITHUB_USERNAME}/repository")',
  '        created = event.get("created_at", "")[:10]',
  '        if etype == "PushEvent":',
  '            payload = event.get("payload", {})',
  '            commits = payload.get("commits", [])',
  '            if commits:',
  '                msg = commits[-1].get("message", "Update").split("\\n")[0][:80]',
  '                lines.append(f"- **Push** to [`{repo}`](https://github.com/{repo}) — _{msg}_ (`{created}`)")',
  '                count += 1',
  '        elif etype == "CreateEvent":',
  '            ref_type = event.get("payload", {}).get("ref_type", "repository")',
  '            lines.append(f"- **Created** {ref_type} [`{repo}`](https://github.com/{repo}) (`{created}`)")',
  '            count += 1',
  '        elif etype == "PullRequestEvent":',
  '            pr_action = event.get("payload", {}).get("action", "opened")',
  '            pr_title  = event.get("payload", {}).get("pull_request", {}).get("title", "PR")[:60]',
  '            lines.append(f"- **PR {pr_action}**: _{pr_title}_ in [`{repo}`](https://github.com/{repo}) (`{created}`)")',
  '            count += 1',
  '        elif etype == "WatchEvent":',
  '            lines.append(f"- **Starred** [`{repo}`](https://github.com/{repo}) (`{created}`)")',
  '            count += 1',
  '    if not lines:',
  '        return "- Active development on open source and AI applications."',
  '    return "\\n".join(lines)',
  '',
  'def generate_repos_section() -> str:',
  '    repos = github_request(f"/users/{GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=5&type=public")',
  '    if not repos:',
  '        return "| Repository | Description | Language | Stars | Updated |\\n|:---|:---|:---:|:---:|:---:|\\n| [`hime-os`](https://github.com/Ayu5h576/hime-os) | AI-powered intelligent operating system | TypeScript | ⭐ 0 | 2026-07-25 |"',
  '    lines = []',
  '    for repo in repos[:5]:',
  '        name        = repo.get("name", "")',
  '        description = (repo.get("description") or "No description provided").strip()[:80]',
  '        stars       = repo.get("stargazers_count", 0)',
  '        language    = repo.get("language") or "—"',
  '        url         = repo.get("html_url", f"https://github.com/{GITHUB_USERNAME}/{name}")',
  '        updated     = repo.get("updated_at", "")[:10]',
  '        lines.append(f"| [`{name}`]({url}) | {description} | {language} | ⭐ {stars} | {updated} |")',
  '    header = "| Repository | Description | Language | Stars | Updated |\\n|:-----------|:------------|:--------:|:-----:|:-------:|"',
  '    return header + "\\n" + "\\n".join(lines)',
  '',
  'def generate_timestamp_section() -> str:',
  '    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")',
  '    return f"<sub>Last updated: **{now}**</sub>"',
  '',
  'def main():',
  '    print(f"[update_readme.py] Running for @{GITHUB_USERNAME} on {TODAY}")',
  '    if not README_PATH.exists():',
  '        print(f"[ERROR] {README_PATH} not found. Exiting.", file=sys.stderr)',
  '        sys.exit(1)',
  '    readme = README_PATH.read_text(encoding="utf-8")',
  '    original = readme',
  '    updates = {',
  '        "quote":      generate_quote_section,',
  '        "tip":        generate_tip_section,',
  '        "focus":      generate_focus_section,',
  '        "activity":   generate_activity_section,',
  '        "repos":      generate_repos_section,',
  '        "timestamp":  generate_timestamp_section,',
  '    }',
  '    for section_name, generator in updates.items():',
  '        print(f"  ↳ Updating section: {section_name} ...", end=" ")',
  '        content = generator()',
  '        readme = replace_section(readme, section_name, content)',
  '        print("done")',
  '    if readme == original:',
  '        print("[update_readme.py] No changes detected.")',
  '    else:',
  '        README_PATH.write_text(readme, encoding="utf-8")',
  '        print("[update_readme.py] README.md updated successfully.")',
  '',
  'if __name__ == "__main__":',
  '    main()'
].join('\n');
fs.writeFileSync(path.join(scriptsDir, 'update_readme.py'), updatePy, 'utf8');

// 6. workflow file
const workflowYaml = [
  'name: Update Profile README',
  '',
  'on:',
  '  schedule:',
  '    - cron: "0 0 * * *"',
  '  workflow_dispatch:',
  '',
  'permissions:',
  '  contents: write',
  '',
  'jobs:',
  '  update-readme:',
  '    name: Refresh Dynamic Sections',
  '    runs-on: ubuntu-latest',
  '    timeout-minutes: 10',
  '',
  '    steps:',
  '      - name: Checkout repository',
  '        uses: actions/checkout@v4',
  '        with:',
  '          fetch-depth: 1',
  '',
  '      - name: Set up Python 3.12',
  '        uses: actions/setup-python@v5',
  '        with:',
  '          python-version: "3.12"',
  '',
  '      - name: Run README updater',
  '        env:',
  '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
  '          GITHUB_USERNAME: "Ayu5h576"',
  '        run: python scripts/update_readme.py',
  '',
  '      - name: Commit changes',
  '        run: |',
  '          git config --local user.email "github-actions[bot]@users.noreply.github.com"',
  '          git config --local user.name "github-actions[bot]"',
  '          git add README.md',
  '          git diff --cached --quiet || git commit -m "chore: auto-update README [$(date -u +\'%Y-%m-%d\')]"',
  '',
  '      - name: Push changes',
  '        uses: ad-m/github-push-action@v0.8.0',
  '        with:',
  '          github_token: ${{ secrets.GITHUB_TOKEN }}',
  '          branch: master'
].join('\n');
fs.writeFileSync(path.join(workflowsDir, 'update-readme.yml'), workflowYaml, 'utf8');

// 7. Minimalist, high-end, crisp README.md
const readme = `<div align="center">

<!-- HERO HEADER BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:050508,50:0a0f1e,100:0070f3&height=180&section=header&text=Ayush%20Rawat&fontSize=48&fontColor=ffffff&fontAlignY=36&desc=Full%20Stack%20Developer%20%7C%20AI%20Engineer%20%7C%20UI%2FUX%20Designer&descAlignY=58&descSize=16&descColor=a0b8d8&animation=fadeIn" alt="Ayush Rawat Header" width="100%" />

<br/>

<!-- TYPING ANIMATION -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1000&color=00AAFF&center=true&vCenter=true&width=650&height=50&lines=Building+HiMe+OS+%E2%80%94+AI-powered+intelligent+OS;Full+Stack+%7C+AI+Engineering+%7C+UI%2FUX+Design;Open+Source+Builder+%26+AI+Startup+Founder)](https://git.io/typing-svg)

<br/>

<!-- CTA BUTTONS -->
<a href="https://himeos.dev"><img src="https://img.shields.io/badge/HiMe%20OS-00aaff?style=for-the-badge&logo=windows&logoColor=black" alt="HiMe OS"/></a>
&nbsp;
<a href="https://linkedin.com/in/Ayu5h576"><img src="https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
&nbsp;
<a href="mailto:ayush@himeos.dev"><img src="https://img.shields.io/badge/Email-ea4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
&nbsp;
<img src="https://komarev.com/ghpvc/?username=Ayu5h576&style=for-the-badge&color=0070f3&label=VIEWS" alt="Profile Views"/>

</div>

---

### About Me

\`\`\`ts
const ayush: Developer = {
  name: "Ayush Rawat",
  roles: ["Full Stack Developer", "AI Application Engineer", "UI/UX Designer"],
  flagshipProject: "HiMe OS — AI-powered intelligent operating system",
  mission: "Build intelligent tools that amplify productivity and user experience",
  coreStack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "OpenAI / Claude / Gemini"]
};
\`\`\`

---

### Tech Stack

<div align="center">

**Languages**  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

<br/>

**Frontend & Mobile**  
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

<br/>

**Backend & Database**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

<br/>

**AI & Tools**  
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-CC785C?style=flat-square&logo=anthropic&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-4285F4?style=flat-square&logo=google&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)

</div>

---

### Featured Project

<div align="center">

#### 🌟 HiMe OS — Flagship Intelligent Operating System

<br/>

<img src="https://raw.githubusercontent.com/Ayu5h576/Ayu5h576/master/assets/hime-os-preview.png" alt="HiMe OS Preview" width="100%" style="border-radius: 8px;" />

<br/><br/>

> **HiMe OS** is an AI-powered intelligent operating system built with modern web tech. Features an adaptive assistant, productivity suite, and deep AI integrations — reimagining the desktop experience.

<br/>

[![GitHub Repo](https://img.shields.io/badge/Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Ayu5h576/hime-os)
&nbsp;
[![Live Demo](https://img.shields.io/badge/Live%20Demo-0070f3?style=flat-square&logo=vercel&logoColor=white)](https://himeos.dev)

</div>

---

### Secondary Projects

| Project | Description | Tech Stack | Links |
|:--------|:------------|:-----------|:------|
| **AI Productivity Suite** | Smart summarizer, code review assistant, and transcription tool | Next.js • TypeScript • OpenAI • Firebase | [Repo](https://github.com/Ayu5h576/ai-productivity-suite) |
| **HiMe Design System** | Accessible component library and design system powering HiMe OS | React • TypeScript • Storybook • Figma | [Repo](https://github.com/Ayu5h576/hime-design-system) |

---

### GitHub Analytics

<div align="center">

<img height="165em" src="https://github-readme-stats.vercel.app/api?username=Ayu5h576&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00aaff&icon_color=00aaff&text_color=c9d1d9&border_radius=10" alt="GitHub Stats" />
&nbsp;
<img height="165em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ayu5h576&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00aaff&text_color=c9d1d9&border_radius=10&langs_count=6" alt="Top Languages" />

<br/><br/>

<img src="https://streak-stats.demolab.com/?user=Ayu5h576&theme=tokyonight&hide_border=true&background=0d1117&stroke=0070f3&ring=00aaff&fire=00f2fe&currStreakNum=ffffff&sideNums=c9d1d9&currStreakLabel=00aaff&border_radius=10&user_timezone=Asia/Kolkata" alt="GitHub Streak" />

</div>

---

### Current Focus

<!-- START_SECTION:focus -->
### What I'm Building

- **HiMe OS** — Shipping the next major release with advanced AI agent integration and a redesigned app ecosystem
- **AI Research** — Exploring multi-modal LLM capabilities and on-device inference patterns
- **HiMe Design System** — Building a world-class component library with accessibility-first principles

### What I'm Learning

- Advanced prompt engineering & AI agent architectures
- WebAssembly for high-performance browser applications
- Edge computing and serverless AI inference
- Systems design patterns for large-scale distributed applications

### Current Roadmap

| Priority | Goal | Status |
|:--------:|:-----|:------:|
| High | HiMe OS v2.0 Alpha | In Progress |
| Med | AI Productivity Suite Launch | Planning |
| Low | Open Source Contributions | Ongoing |
<!-- END_SECTION:focus -->

---

### Recent Activity

<!-- START_SECTION:activity -->
- Updated project documentation and repositories.
<!-- END_SECTION:activity -->

---

### Latest Repositories

<!-- START_SECTION:repos -->
| Repository | Description | Language | Stars | Updated |
|:-----------|:------------|:--------:|:-----:|:-------:|
| [hime-os](https://github.com/Ayu5h576/hime-os) | AI-powered intelligent operating system | TypeScript | ⭐ 0 | 2026-07-25 |
<!-- END_SECTION:repos -->

---

### Quote of the Day

<!-- START_SECTION:quote -->
<div align="center">

> *"The best way to predict the future is to invent it."*
>
> **— Alan Kay**

</div>
<!-- END_SECTION:quote -->

---

### Daily Tip

<!-- START_SECTION:tip -->
**\`AI Engineering\`**

> When prompting LLMs, specify output schemas explicitly for consistent JSON parsing.
<!-- END_SECTION:tip -->

---

<div align="center">

<a href="https://linkedin.com/in/Ayu5h576"><img src="https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
&nbsp;
<a href="https://github.com/Ayu5h576"><img src="https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
&nbsp;
<a href="mailto:ayush@himeos.dev"><img src="https://img.shields.io/badge/Email-Contact-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>

<br/><br/>

<!-- START_SECTION:timestamp -->
<sub>Last updated: **2026-07-25 18:00 UTC**</sub>
<!-- END_SECTION:timestamp -->

</div>
`;

fs.writeFileSync(path.join(baseDir, 'README.md'), readme, 'utf8');

console.log('Successfully wrote clean UTF-8 files!');
