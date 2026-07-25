# ðŸ› ï¸ GitHub Profile README â€” Setup Guide

This guide walks you through deploying and customizing your automated GitHub profile README.

---

## ðŸ“‹ Prerequisites

- A GitHub account with username `Ayu5h576`
- Python 3.8+ (for local testing only)
- A GitHub Personal Access Token (optional â€” only needed for local testing; Actions uses `GITHUB_TOKEN` automatically)

---

## ðŸš€ Step 1: Create Your Profile Repository

GitHub profile READMEs require a **special repository** with the same name as your username.

1. Go to [github.com/new](https://github.com/new)
2. Set **Repository name** to exactly: `Ayu5h576`
3. Check **"Public"**
4. Check **"Add a README file"**
5. Click **"Create repository"**

> âœ… GitHub will now display this repo's README on your profile at `github.com/Ayu5h576`

---

## ðŸ“ Step 2: Upload the Files

Copy all files from this project into your new profile repository. The expected structure is:

```
Ayu5h576/                      â† your GitHub profile repo root
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”‚       â””â”€â”€ update-readme.yml    â† GitHub Actions workflow
â”œâ”€â”€ readme-data/
â”‚   â”œâ”€â”€ projects.json            â† featured project data
â”‚   â”œâ”€â”€ focus.md                 â† your current focus (edit this!)
â”‚   â”œâ”€â”€ quotes.json              â† quote rotation pool
â”‚   â””â”€â”€ tips.json                â† programming tip pool
â”œâ”€â”€ scripts/
â”‚   â””â”€â”€ update_readme.py         â† Python auto-updater
â”œâ”€â”€ README.md                    â† your profile README
â””â”€â”€ SETUP_GUIDE.md               â† this file
```

**Upload methods:**
- **GitHub CLI**: `gh repo clone Ayu5h576/Ayu5h576` then copy files and push
- **GitHub Web UI**: Use "Add file â†’ Upload files" in the repository
- **Git**: Clone, copy files, commit, and push

---

## âš™ï¸ Step 3: Enable GitHub Actions

1. In your profile repository, go to **Settings â†’ Actions â†’ General**
2. Under **"Workflow permissions"**, select **"Read and write permissions"**
3. Click **Save**

This allows the workflow to commit updated README content automatically.

---

## â–¶ï¸ Step 4: Run the First Update

1. Go to **Actions** tab in your profile repository
2. Select **"ðŸ“Š Update Profile README"** from the left sidebar
3. Click **"Run workflow"** â†’ **"Run workflow"**

The workflow will:
- Execute `scripts/update_readme.py`
- Replace all dynamic sections in `README.md`
- Commit and push the result if any changes were made

---

## â±ï¸ Step 5: Confirm Daily Schedule

The workflow runs automatically every day at **00:00 UTC** via this cron schedule:

```yaml
schedule:
  - cron: "0 0 * * *"
```

To change the schedule, edit `.github/workflows/update-readme.yml` and update the cron expression.

---

## âœï¸ Customization

### Update Your Current Focus

Edit `readme-data/focus.md` anytime. The next workflow run will automatically sync it to your README.

### Add a Featured Project

Edit `readme-data/projects.json` and add a new entry:

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "description": "A brief description of what this project does.",
  "status": "active",
  "featured": true,
  "technologies": ["React", "Node.js", "Firebase"],
  "repo_url": "https://github.com/Ayu5h576/my-new-project",
  "demo_url": "https://my-project.vercel.app",
  "image": null,
  "stars": null,
  "category": "fullstack"
}
```

### Add New Quotes or Tips

Add entries to `readme-data/quotes.json` or `readme-data/tips.json`. The daily rotation picks one automatically based on the day's date.

### Change Your GitHub Username

In `.github/workflows/update-readme.yml`, update:

```yaml
GITHUB_USERNAME: "your-username-here"
```

---

## ðŸ“ˆ WakaTime Setup (Optional)

WakaTime tracks your coding time and languages automatically.

1. Sign up at [wakatime.com](https://wakatime.com) (free tier available)
2. Install the WakaTime extension in VS Code / your editor
3. Get your API key from [wakatime.com/settings/api-key](https://wakatime.com/settings/api-key)
4. In your GitHub repo, go to **Settings â†’ Secrets â†’ Actions**
5. Add a new secret: `WAKATIME_API_KEY` with your key
6. Add the [WakaTime Readme Stats action](https://github.com/anmol098/waka-readme-stats) to your workflow

---

## ðŸ§ª Local Testing

Run the updater locally to preview changes before committing:

```bash
# Clone your profile repo
git clone https://github.com/Ayu5h576/Ayu5h576
cd Ayu5h576

# Set your token (for GitHub API access)
$env:GITHUB_TOKEN = "your_github_token_here"   # PowerShell
# or
export GITHUB_TOKEN="your_github_token_here"   # bash/zsh

# Run the updater
python scripts/update_readme.py

# Review the output
cat README.md
```

> The script uses only Python standard library â€” no `pip install` required.

---

## ðŸ”§ Troubleshooting

| Problem | Solution |
|---------|----------|
| Workflow fails with permission error | Go to Settings â†’ Actions â†’ General â†’ Enable "Read and write permissions" |
| Sections not updating | Ensure `<!-- START_SECTION:name -->` and `<!-- END_SECTION:name -->` markers are present in `README.md` |
| GitHub API rate limits | The `GITHUB_TOKEN` in Actions provides 1,000 requests/hour â€” should never be an issue for daily runs |
| Profile README not showing | Make sure the repository is named exactly your GitHub username (case-sensitive) |
| Typing animation not working | The `readme-typing-svg.demolab.com` service is third-party â€” if it's down, the badge will show a fallback |

---

## ðŸ”— Services Used

| Service | Purpose | Cost |
|---------|---------|------|
| [GitHub Actions](https://docs.github.com/en/actions) | Daily automation | Free |
| [Capsule Render](https://github.com/kyechan99/capsule-render) | Hero banner & footer waves | Free |
| [Readme Typing SVG](https://github.com/DenverCoder1/readme-typing-svg) | Animated typing text | Free |
| [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) | GitHub stats cards | Free |
| [GitHub Readme Streak Stats](https://github.com/DenverCoder1/github-readme-streak-stats) | Streak calendar | Free |
| [GitHub Activity Graph](https://github.com/Ashutosh00710/github-readme-activity-graph) | Contribution graph | Free |
| [Shields.io](https://shields.io) | Tech stack badges | Free |
| [komarev.com](https://komarev.com/ghpvc/) | Visitor counter | Free |

---

<div align="center">

Built with â¤ï¸ by [Ayush Rawat](https://github.com/Ayu5h576)

</div>

