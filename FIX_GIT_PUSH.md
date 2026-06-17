# Fix Git Push Error - Remove node_modules

## Problem

You accidentally committed `node_modules` to Git, which contains large files (116MB) that exceed GitHub's 100MB limit.

## Solution

Follow these steps to fix your repository:

### Step 1: Remove node_modules from Git History

```bash
cd divine-events

# Remove node_modules from Git tracking (but keep the files locally)
git rm -r --cached node_modules

# Add the changes
git add .gitignore

# Commit the fix
git commit -m "Remove node_modules from Git tracking"
```

### Step 2: Clean Up Git History (Optional but Recommended)

If you want to completely remove node_modules from Git history:

```bash
# Install BFG Repo Cleaner (if not already installed)
# On macOS:
brew install bfg

# Or download from: https://rtyley.github.io/bfg-repo-cleaner/

# Clean the repository
bfg --delete-folders node_modules

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### Step 3: Force Push to GitHub

```bash
# Force push to overwrite the remote repository
git push -f origin main
```

## Alternative: Start Fresh (Easier)

If the above seems complicated, start with a clean repository:

### Step 1: Delete .git folder

```bash
cd divine-events
rm -rf .git
```

### Step 2: Initialize Fresh Repository

```bash
# Initialize new Git repository
git init

# Add all files (node_modules will be ignored by .gitignore)
git add .

# Commit
git commit -m "Initial commit - Divine Events website"

# Add remote
git remote add origin git@github-personal:mihirrh/divine-events.git

# Push
git push -u origin main --force
```

## Verify .gitignore is Working

Check what will be committed:

```bash
# See what files are tracked
git ls-files

# node_modules should NOT appear in the list
```

## Expected File Size

After removing node_modules, your repository should be:
- **~5-10 MB** (source code only)
- NOT 94 MB

## What Gets Pushed to GitHub

✅ **Should be pushed:**
- Source code (app/, components/, lib/, etc.)
- Configuration files (package.json, tsconfig.json, etc.)
- Documentation (README.md, etc.)
- Public assets (public/ folder)

❌ **Should NOT be pushed:**
- node_modules/
- .next/
- .env files
- IDE settings (.vscode/, .idea/)

## After Successful Push

Once pushed successfully:

1. **Verify on GitHub:**
   - Go to your repository
   - Check file count is reasonable (~100-200 files)
   - Verify node_modules is not there

2. **Deploy to Cloudflare:**
   - Connect your GitHub repository
   - Cloudflare will run `npm install` automatically
   - Your site will build and deploy

## Why This Happened

The `.gitignore` file tells Git which files to ignore, but if you already committed files before creating `.gitignore`, they remain tracked.

## Prevention

Always create `.gitignore` BEFORE your first commit:

```bash
# Correct order:
1. Create project
2. Create .gitignore
3. git init
4. git add .
5. git commit
```

## Need Help?

If you're still stuck:

1. Delete the GitHub repository
2. Create a new one
3. Follow "Alternative: Start Fresh" steps above

This is often faster than trying to fix Git history!