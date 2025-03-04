#!/bin/sh

# Configuratie
PROJECT_ROOT="learningstories-xet1309"
DEPLOY_FOLDER="dist"
GIT_COMMIT_MESSAGE="New build for deploy: $(date)"
GIT_BRANCH_REMOTE="gh-pages"
GIT_REPO_REMOTE="https://github.com/HU-SD-V3INNO-FE-2025/learningstories-xet1309.git"
GIT_BRANCH_LOCAL="main"

# Stop script bij fouten
set -e

# Verwijder oude build
rm -rf $DEPLOY_FOLDER

# Installeer dependencies en build het project
npm install
npm run build

# Ga naar de build output map
cd $DEPLOY_FOLDER

# Kopieer index.html naar 404.html (voorkomt routing fouten)
cp index.html 404.html

# Maak een .nojekyll bestand (nodig voor GitHub Pages)
echo > .nojekyll

# Initialiseer een nieuwe git repository
git init

# Stel een geldige gebruiker in voor GitHub Actions
git config user.name "xet1309"
git config user.email "xavier.tromp@student.hu.nl"

# Wissel naar de lokale branch
git checkout -B $GIT_BRANCH_LOCAL

# Voeg bestanden toe en commit
git add -A
git commit -m "$GIT_COMMIT_MESSAGE"

# Force push naar gh-pages branch
git push -f $GIT_REPO_REMOTE $GIT_BRANCH_LOCAL:$GIT_BRANCH_REMOTE

echo "✅ Deploy voltooid!"
