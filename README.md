# House-Events-Project

Develop App for PRISMS house events

## GitHub Repo Rule

1. **main** branch: Locked. You neither can push nor pull. This branch will be the final codes.
2. **dev** branch: All of the dev works will be combined here.
   You can pull updated code & send Pull Request from your own branch to dev branch
3. **your own** branch: You will only work on this branch and send Pull Request to dev branch

## Getting Started

### 1. Open Terminal and go to the folder that you want to work with

### 2. Clone GitHub Repository

    git clone https://github.com/retz8/PRISMS-house-events-app.git

### 3. Open VS Code

    cd PRISMS-house-events-app
    code .

### 4. Open "dev" Branch & Your Own Branch

First, open "dev" branch

    git branch
    git switch dev
    git pull origin dev

Second, open your own branch and merge dev branch

    git switch <your first name>
    git merge dev --allow-unrelated-histories
    git add .
    git commit -m "first commit"
    git push -u origin <your first name>

### 5. Wow, you are ready to work on the project!

First, Open command line and run following command to test

    npm install

Second, create .env file at the same level as package.json file (outside of src)

Third, run following command

    expo start

-> Check Notion Page and find .env configuration task. Copy and past everything in "Description" to your .env file.

## WorkFlow

You will follow this work flow during club time (or whenver you want to work with)

### 1. Open your project folder in VS Code

### 2. Open dev branch and fetch updated code. Check update on dev branch regularly

    git switch dev
    git pull

### 3. Open your own branch

    git switch <your first name>

### 4. Update code on your own branch

### 5. When you think your task is done or need code review, send Pull Request to dev branch

    git add .
    git commit -m "<commit message, please write it clearly>"
    git push -u origin <your first name>

### 6. Visit the repository on GitHub in your web browser and navigate your own branch.

1. Click the "New Pull Request" button on the page. This will take you to the "Open a pull request" page.

2. Select the **dev** branch as the base branch and **your own** branch as the compare branch.

3. Review the changes that will be included in the pull request and add a description if necessary.

4. Once you are satisfied with the pull request, click the "Create pull request" button to submit it.

5. The repository owner or maintainers will be notified of your pull request and can review and merge your changes into the dev branch if they approve of them.
