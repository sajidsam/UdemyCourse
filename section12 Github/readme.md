# Section 12 — Git & GitHub Workflow

## Overview
This section covers version control with Git and GitHub. You'll learn the essential Git commands, branching, committing, and how to deploy and manage your project on GitHub.

## Topics Covered
- Initializing a Git repository (`git init`)
- Staging and committing changes (`git add`, `git commit`)
- Working with `.gitignore` to exclude files
- Connecting to a remote repository (`git remote add origin`)
- Pushing code to GitHub (`git push`)
- Branching and merging (`git branch`, `git checkout`, `git merge`)
- Deploying projects to GitHub Pages or Vercel

## Files
| File / Folder | Description |
| :------------ | :---------- |
| `index.html` | Lumina home page (used as the practice project) |
| `about.html` | About page |
| `contact.html` | Contact page |
| `css/` | Stylesheet directory |
| `images/` | Image assets |
| `.gitignore` | Files and folders to ignore in version control |

## Key Git Commands
```bash
git init                        # Initialize a new repo
git status                      # Check current status
git add .                       # Stage all changes
git commit -m "your message"    # Commit staged changes
git remote add origin <url>     # Link to remote repo
git push -u origin main         # Push to GitHub
git pull                        # Pull latest changes
git branch feature-name         # Create a new branch
git checkout feature-name       # Switch to a branch
git merge feature-name          # Merge branch into current
```

## Key Concepts
- Git is local version control; GitHub is a remote hosting service
- Commit messages should be clear and descriptive
- `.gitignore` prevents sensitive or unnecessary files from being tracked
- Branching allows safe, isolated feature development