# Portfolio Project Automation

This portfolio website automatically fetches and displays your GitHub projects based on repository topics.

## How It Works

### 1. Topic-Based Categorization

Add specific topics to your GitHub repositories to categorize them in your portfolio:

- `ai-engineering` → Displays under "AI Engineering"
- `digital-marketing` → Displays under "Digital Marketing"
- `content-creation` → Displays under "Content Creation"

### 2. Automatic Updates

A GitHub Actions workflow (`update-projects.yml`) runs:
- **Daily at 00:00 UTC** (scheduled)
- **On every push to `main`**
- **Manually via workflow_dispatch**

The workflow:
1. Fetches all your public repositories
2. Filters repos with portfolio category topics
3. Extracts project data (name, description, homepage, topics, stars, etc.)
4. Updates `data/github-projects.json`
5. Auto-commits changes (if any)
6. Triggers the deploy workflow to rebuild the site

### 3. Project Display

The Projects component (`components/projects.tsx`) merges:
- GitHub-sourced projects from `data/github-projects.json`
- Hardcoded projects with custom images/sliders

GitHub projects take precedence over hardcoded ones if they share the same repository URL.

## Setup Instructions

### Add Topics to Your Repos

Use the GitHub CLI or web interface:

```bash
# Using GitHub CLI
gh repo edit owner/repo-name --add-topic ai-engineering

# Or via GitHub web UI:
# Repository → Settings → Topics → Add topic
```

### Manually Trigger Update

1. Go to **Actions** tab in your repository
2. Select **Update GitHub Projects** workflow
3. Click **Run workflow**

### Local Testing

```bash
# Fetch projects locally (requires GITHUB_TOKEN for rate limits)
npm run fetch-projects

# Or directly
node scripts/fetch-projects.mjs
```

## Project Data Structure

Each GitHub project includes:

```json
{
  "title": "Project Name",
  "category": "AI Engineering",
  "description": "Project description from repo",
  "image": "/placeholder.svg?height=300&width=400",
  "iconType": "ai",
  "isSlider": false,
  "tags": ["Tag1", "Tag2"],
  "link": "https://project-homepage.com or repo URL",
  "github": "https://github.com/user/repo",
  "buttonText": "Try It Live" or "View Repository",
  "buttonType": "demo" or "github",
  "stars": 42,
  "forks": 10,
  "language": "TypeScript",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

## Button Logic

- If repo has a homepage URL → **"Try It Live"** button (demo type)
- No homepage → **"View Repository"** button (github type)

## Custom Projects

Keep custom projects in the hardcoded array for:
- Projects with image sliders
- Non-GitHub projects
- Projects requiring special formatting

## Troubleshooting

### Projects not updating?

1. Check workflow run in Actions tab
2. Verify topics are added to repos
3. Ensure workflow has write permissions
4. Check `data/github-projects.json` for updates

### Build failing?

- Ensure `data/github-projects.json` exists (even if empty `[]`)
- Check TypeScript types in `types/github-projects.d.ts`
- Verify JSON import works in `components/projects.tsx`

## Files Modified

- `.github/workflows/update-projects.yml` - Automation workflow
- `scripts/fetch-projects.mjs` - Fetcher script
- `components/projects.tsx` - Updated to use JSON data
- `data/github-projects.json` - Generated project data
- `types/github-projects.d.ts` - TypeScript definitions
- `package.json` - Added `fetch-projects` script
