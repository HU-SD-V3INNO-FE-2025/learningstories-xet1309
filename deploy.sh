#!/bin/sh

# Init local variables
PROJECT_ROOT="learningstories-xet1309"
WORKING_DIR="$PROJECT_ROOT"
DEPLOY_FOLDER="dist"
GIT_COMMIT_MESSAGE="New build for deploy: $(date)"
GIT_BRANCH_REMOTE="gh-pages"
GIT_REPO_REMOTE="https://github.com/HU-SD-V3INNO-FE-2025/learningstories-xet1309.git"

# Abort on errors
set -e

# Remove previous build output
rm -rf $DEPLOY_FOLDER

# Build the project
npm install
npm run build

# Navigate into the build output folder
cd $DEPLOY_FOLDER

# Copy index.html to 404.html to prevent 404 errors on direct route navigation
cp index.html 404.html

# Create empty .nojekyll file to bypass Jekyll processing (a GitHub Pages thing)
echo > .nojekyll

# Initialize git in the dist folder
git init
git checkout -B main

# Add all files to Git
git add -A

# Commit the changes
git commit -m "$GIT_COMMIT_MESSAGE"

# Push to GitHub Pages branch (force push)
git push -f $GIT_REPO_REMOTE main:$GIT_BRANCH_REMOTE

# Return to the root directory
cd ../../..

echo "Deployment to GitHub Pages complete!"