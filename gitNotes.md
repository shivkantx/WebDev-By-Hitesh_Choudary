# 🚀 Complete Git & Bash Command Reference

> _A comprehensive, beautifully crafted guide to essential Git and Bash commands arranged in logical learning sequence with descriptions, syntax, examples, and outputs._

---

## 🎯 Table of Contents

- [📁 **Section A:** Basic Navigation & File System](#-section-a-basic-navigation--file-system)
- [⚙️ **Section B:** Git Repository Initialization & Configuration](#️-section-b-git-repository-initialization--configuration)
- [🔧 **Section C:** Basic Git Operations](#-section-c-basic-git-operations)
- [🔍 **Section D:** Examining Changes](#-section-d-examining-changes)
- [💾 **Section E:** Committing Changes](#-section-e-committing-changes)
- [📜 **Section F:** Viewing History](#-section-f-viewing-history)
- [🌲 **Section G:** Branch Management](#-section-g-branch-management)
- [🔄 **Section H:** Merging and Conflict Resolution](#-section-h-merging-and-conflict-resolution)
- [☁️ **Section I:** Remote Repository Operations](#️-section-i-remote-repository-operations)
- [⚠️ **Section J:** Common Mistakes and Workflow Examples](#️-section-j-common-mistakes-and-workflow-examples)

---

## 📁 SECTION A: Basic Navigation & File System

_Master the fundamentals of file system navigation before diving into Git_

### 1️⃣ `pwd` - Print Working Directory

> **📍 Description:** Prints the current working directory path, showing exactly where you are in the file system.

**🔧 Syntax:**

```bash
pwd
```

**💡 Example:**

```bash
$ pwd
```

**✨ Output:**

```bash
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
```

---

### 2️⃣ `ls` - List Directory Contents

> **📋 Description:** Lists the contents of the current directory, showing files and folders.

**🔧 Syntax:**

```bash
ls
```

**💡 Example:**

```bash
$ ls
```

**✨ Output:**

```bash
gitine  gitthree  gittwo
```

---

### 3️⃣ `cd` - Change Directory

> **🚶 Description:** Changes the current working directory to the specified folder path.

**🔧 Syntax:**

```bash
cd <foldername>
```

**💡 Example:**

```bash
$ cd gitone
$ pwd
```

**✨ Output:**

```bash
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
```

---

### 4️⃣ `mkdir` - Make Directory

> **📁 Description:** Creates new directories/folders with the specified name(s).

**🔧 Syntax:**

```bash
mkdir <directory_name>
```

**💡 Example:**

```bash
$ mkdir newProject
$ ls
```

**✨ Output:**

```bash
gitine  gitthree  gittwo  newProject
```

---

### 5️⃣ `touch` - Create Files

> **✨ Description:** Creates empty files or updates the timestamp of existing files. Commonly used to quickly create new files.

**🔧 Syntax:**

```bash
touch <filename1> <filename2>
```

**💡 Example:**

```bash
$ touch testone.txt testtwo.txt
```

**✨ Output:**

```bash
# Files are created silently (no output unless error)
```

---

### 6️⃣ Directory Navigation with Tab Completion

> **⚡ Description:** Using tab completion to navigate between directories efficiently.

**🔧 Syntax:**

```bash
cd <partial_path><TAB>
```

**💡 Example:**

```bash
$ cd gitCheck/gitt<TAB>
gitthree/ gittwo/
$ cd gitCheck/gittwo/
```

**✨ Output:**

```bash
# Tab completion shows available options
gitthree/ gittwo/
```

---

## ⚙️ SECTION B: Git Repository Initialization & Configuration

_Set up your Git environment and configure your repository_

### 7️⃣ `git init` - Initialize Repository

> **🎬 Description:** Initializes a new Git repository in the current directory, creating the necessary Git files and folders.

**🔧 Syntax:**

```bash
git init
```

**💡 Example:**

```bash
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git init
```

**✨ Output:**

```bash
Initialized empty Git repository in /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone/.git/
```

---

### 8️⃣ `git config --global core.editor` - Set Default Editor

> **🖊️ Description:** Sets the default text editor that Git will use for commit messages and other text editing operations.

**🔧 Syntax:**

```bash
git config --global core.editor "editor_command"
```

**💡 Example:**

```bash
$ git config --global core.editor "code ."
```

**✨ Output:**

```bash
# Configuration is set silently (no output unless error)
```

---

### 9️⃣ `.gitignore` file - Ignore Files

> **🚫 Description:** A special file that tells Git which files and directories to ignore and not track in version control.

**🔧 Syntax:** Create a file named `.gitignore` and list files/patterns to ignore.

**💡 Example:**

```bash
$ echo "node_modules/" >> .gitignore
$ echo "*.log" >> .gitignore
$ git status
```

**✨ Output:**

```bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    .gitignore
```

---

## 🔧 SECTION C: Basic Git Operations

_Learn the core Git commands for tracking and staging files_

### 🔟 `git status` - Check Repository Status

> **📊 Description:** Shows the current state of your working directory and staging area. It displays which files are tracked, untracked, modified, or staged for commit.

**🔧 Syntax:**

```bash
git status
```

**💡 Example:**

```bash
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git status
```

**✨ Output:**

```bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    testone.txt
    testtwo.txt
nothing added to commit but untracked files present (use "git add" to track)
```

---

### 1️⃣1️⃣ Git Status - Clean Working Directory

> **✅ Description:** Shows when there are no pending changes in your working directory.

**🔧 Syntax:**

```bash
git status
```

**💡 Example:**

```bash
$ git status
```

**✨ Output:**

```bash
On branch master
nothing to commit, working tree clean
```

---

### 1️⃣2️⃣ `git add` - Stage Single File

> **➕ Description:** Stages files for commit by adding them to the staging area. This tells Git to include the file in the next commit.

**🔧 Syntax:**

```bash
git add <filename>
```

**💡 Example:**

```bash
$ git add testone.txt
$ git status
```

**✨ Output:**

```bash
Changes to be committed:
  new file:   testone.txt
```

---

### 1️⃣3️⃣ `git add .` - Stage All Files

> **🎯 Description:** Stages all modified and new files in the current directory and subdirectories for commit.

**🔧 Syntax:**

```bash
git add .
```

**💡 Example:**

```bash
$ git add .
```

**✨ Output:**

```bash
# Files are staged silently (use git status to see results)
```

---

### 1️⃣4️⃣ Complex Git Add Operations

> **🔄 Description:** Staging multiple files or specific files along with all changes.

**🔧 Syntax:**

```bash
git add . <specific_file>
```

**💡 Example:**

```bash
$ git add . index.html
```

**✨ Output:**

```bash
# Files are staged silently
```

---

### 1️⃣5️⃣ Git Status - Multiple Staged Files

> **📋 Description:** Shows the status when multiple files are staged for commit.

**🔧 Syntax:**

```bash
git status
```

**💡 Example:**

```bash
$ git status
```

**✨ Output:**

```bash
On branch master
Changes to be committed:
        modified:   footer.html
        modified:   index.html
```

---

### 1️⃣6️⃣ `git status` (Staged File)

> **🎭 Description:** Shows the current state when files are staged for commit.

**🔧 Syntax:**

```bash
git status
```

**💡 Example:**

```bash
$ git status
```

**✨ Output:**

```bash
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
```

---

## 🔍 SECTION D: Examining Changes

_Understand what changes you're about to commit_

### 1️⃣7️⃣ `git diff` - Show Unstaged Changes

> **🔎 Description:** Shows the differences between files in different states (working directory vs staging area, or between commits).

**🔧 Syntax:**

```bash
git diff
git diff <filename>
git diff --staged
```

**💡 Example:**

```bash
$ git diff
$ git diff index.html
```

**✨ Output:**

```bash
# Shows unstaged differences (no output if no unstaged changes)
```

---

### 1️⃣8️⃣ `git diff --staged` - Show Staged Changes

> **👀 Description:** Shows the differences between staged files and the last commit.

**🔧 Syntax:**

```bash
git diff --staged
```

**💡 Example:**

```bash
$ git diff --staged
```

**✨ Output:**

```bash
diff --git a/index.html b/index.html
index b463851..5db98c7 100644
--- a/index.html
+++ b/index.html
@@ -6,6 +6,7 @@
     <title>Git learning</title>
   </head>
   <body>
+    <header>added header here</header>
     <h1>Welcome to Git Learning</h1>
     <p>This is a simple HTML page to demonstrate basic Git usage.</p>
     <ul>
```

---

### 1️⃣9️⃣ Combined Git Diff for Footer Changes

> **🦶 Description:** Shows staged differences for footer file changes.

**🔧 Syntax:**

```bash
git add footer.html
git diff --staged
```

**💡 Example:**

```bash
$ git add footer.html
$ git diff --staged
```

**✨ Output:**

```bash
diff --git a/footer.html b/footer.html
index e845b95..08c335f 100644
--- a/footer.html
+++ b/footer.html
@@ -7,7 +7,7 @@
   </head>
   <body>
     <footer>
-      <p>&copy; 2023 Git Learning</p>
+      <p>Add some better footer</p>
     </footer>
   </body>
 </html>
```

---

## 💾 SECTION E: Committing Changes

_Save your work with meaningful snapshots_

### 2️⃣0️⃣ `git commit` - Create Commit

> **📸 Description:** Creates a new commit with the staged changes and a descriptive message. This saves a snapshot of your project at a specific point in time.

**🔧 Syntax:**

```bash
git commit -m "your message"
```

**💡 Example:**

```bash
$ git commit -m "added testone.txt file"
```

**✨ Output:**

```bash
[master (root-commit) f4c9b98] added testone.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 testone.txt
```

---

### 2️⃣1️⃣ `git commit -m` (gitNotes example)

> **📝 Description:** Commits staged changes with a specific message for gitNotes.

**🔧 Syntax:**

```bash
git commit -m "your message"
```

**💡 Example:**

```bash
git commit -m "gitNotes added in folder"
```

**✨ Output:**

```bash
[main 1bffe3b] gitNotes added in folder
 1 file changed, 476 insertions(+)
 create mode 100644 gitNotes.md
```

---

### 2️⃣2️⃣ Commit Staged Changes with Complex Message

> **🎨 Description:** Commits multiple staged changes with a descriptive message.

**🔧 Syntax:**

```bash
git commit -m "descriptive message"
```

**💡 Example:**

```bash
$ git commit -m "Change #1: header + footer content update"
```

**✨ Output:**

```bash
# Output would show commit hash and files changed
```

---

### 2️⃣3️⃣ Index File Commit Example

> **🏠 Description:** Commits changes to index file with footer code.

**🔧 Syntax:**

```bash
git commit -m "your message"
```

**💡 Example:**

```bash
$ git add index.html
$ git commit -m "Index filen with footer code"
```

**✨ Output:**

```bash
[master 295f8c4] Index filen with footer code
 1 file changed, 1 insertion(+)
```

---

### 2️⃣4️⃣ Another Index Commit Example

> **🔁 Description:** Another example of committing index file changes.

**🔧 Syntax:**

```bash
git commit -m "your message"
```

**💡 Example:**

```bash
$ git status
On branch master
Changes not staged for commit:
        modified:   index.html

$ git add index.html
$ git commit -m "Index filen with footer code"
```

**✨ Output:**

```bash
[master c83634f] Index filen with footer code
```

---

## 📜 SECTION F: Viewing History

_Explore your project's timeline and evolution_

### 2️⃣5️⃣ `git log` - View Commit History

> **📚 Description:** Shows the commit history for the current branch, displaying commit hashes, authors, dates, and commit messages.

**🔧 Syntax:**

```bash
git log
```

**💡 Example:**

```bash
$ git log
```

**✨ Output:**

```bash
commit 091313b... add second file to code base
commit f4c9b9... added testone.txt file
```

---

### 2️⃣6️⃣ `git log --oneline` - Condensed History

> **📋 Description:** Shows a condensed version of the commit history with each commit on a single line, displaying abbreviated commit hash and message.

**🔧 Syntax:**

```bash
git log --oneline
```

**💡 Example:**

```bash
$ git log --oneline
```

**✨ Output:**

```bash
091313b (HEAD -> master) add second file to code base
f4c9b98 added testone.txt file
```

---

### 2️⃣7️⃣ Detailed Git Log Example

> **📖 Description:** Shows detailed commit history with full information.

**🔧 Syntax:**

```bash
git log
```

**💡 Example:**

```bash
$ git log
```

**✨ Output:**

```bash
commit b8c0cd7f9bfc...
Author: Shiv Kant <email@example.com>
Date:   Thu Jul 17 16:23:10 2025 +0530

    Index file with footer code
```

---

## 🌲 SECTION G: Branch Management

_Master parallel development with branches_

### 2️⃣8️⃣ `git branch` - List Branches

> **🌿 Description:** Lists all local branches in the repository, with an asterisk (\*) indicating the current branch.

**🔧 Syntax:**

```bash
git branch
```

**💡 Example:**

```bash
$ git branch
```

**✨ Output:**

```bash
* master
  footer
```

---

### 2️⃣9️⃣ Branch Navigation Example

> **🗺️ Description:** Shows branch listing during navigation between branches.

**🔧 Syntax:**

```bash
git branch
```

**💡 Example:**

```bash
$ git checkout master
Already on 'master'

$ git checkout footer
Switched to branch 'footer'

$ git checkout master
Switched to branch 'master'

$ git branch
```

**✨ Output:**

```bash
  footer
* master
```

---

### 3️⃣0️⃣ `git checkout` - Switch Branches

> **🔄 Description:** Switches to a different branch or restores files to a previous state.

**🔧 Syntax:**

```bash
git checkout <branch-name>
```

**💡 Example:**

```bash
$ git checkout footer
```

**✨ Output:**

```bash
Switched to branch 'footer'
```

---

### 3️⃣1️⃣ Footer Branch Final Commit

> **🎯 Description:** Making final commit on footer branch after switching.

**🔧 Syntax:**

```bash
git checkout <branch>
git add <file>
git commit -m "message"
```

**💡 Example:**

```bash
$ git checkout footer
Switched to branch 'footer'

$ git add index.html
$ git commit -m "updated index file by footer code"
```

**✨ Output:**

```bash
[footer ce5128e] updated index file by footer code
```

---

## 🔄 SECTION H: Merging and Conflict Resolution

_Combine branches and handle conflicts like a pro_

### 3️⃣2️⃣ `git merge` (Successful)

> **✅ Description:** Combines changes from one branch into the current branch when no conflicts exist.

**🔧 Syntax:**

```bash
git merge <branch-name>
```

**💡 Example:**

```bash
$ git merge footer
```

**✨ Output:**

```bash
Already up to date.
```

---

### 3️⃣3️⃣ `git merge` (With Conflict)

> **⚠️ Description:** Combines changes from one branch into the current branch, showing conflict resolution needed.

**🔧 Syntax:**

```bash
git merge <branch-name>
```

**💡 Example:**

```bash
$ git merge footer
```

**✨ Output:**

```bash
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

---

### 3️⃣4️⃣ Mistyped Merge & Proper Merge

> **❌ Description:** Shows common typing errors and correct merge command usage.

**🔧 Syntax:**

```bash
git merge <branch-name>
```

**💡 Example:**

```bash
$ gir merge footer
-bash: gir: command not found

$ git merge footer
```

**✨ Output:**

```bash
Already up to date.
```

---

### 3️⃣5️⃣ Complex Merge Conflict Resolution

> **🛠️ Description:** The complete process of resolving merge conflicts and committing the resolution.

**🔧 Syntax:**

```bash
git merge <branch>
# Resolve conflicts manually
git add .
git commit -m "conflict resolution message"
```

**💡 Example:**

```bash
$ git merge footer
# Resolve conflicts in editor
$ git add .
$ git commit -m "merged footer branch"
```

**✨ Output:**

```bash
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
# After resolution:
[master 3eb8674] merged footer branch
```

---

### 3️⃣6️⃣ Commit After Conflict Resolved

> **🎉 Description:** Final commit step after resolving merge conflicts.

**🔧 Syntax:**

```bash
git add .
git commit -m "merge resolution message"
```

**💡 Example:**

```bash
$ git add .
$ git commit -m "merged footer branch"
```

**✨ Output:**

```bash
[master 3eb8674] merged footer branch
```

---

### 3️⃣7️⃣ Specific File Add and Commit for Merge

> **🎯 Description:** Adding specific file during merge resolution process.

**🔧 Syntax:**

```bash
git add <filename>
git commit -m "message"
```

**💡 Example:**

```bash
$ git add index.html
$ git commit -m "Index file with footer code"
```

**✨ Output:**

```bash
[master c83634f] Index file with footer code
 1 file changed, 1 insertion(+), 1 deletion(-)
```

---

## ☁️ SECTION I: Remote Repository Operations

_Connect with the world - push and pull from remote repositories_

### 3️⃣8️⃣ `git push origin main` - Upload Changes

> **🚀 Description:** Uploads your local commits to the remote repository on the main branch.

**🔧 Syntax:**

```bash
git push origin main
```

**💡 Example:**

```bash
$ git push origin main
```

**✨ Output:**

```bash
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'origin'
hint: Updates were rejected because the remote contains work that you do
not have locally.
```

---

### 3️⃣9️⃣ `git pull origin main` - Download Changes

> **📥 Description:** Downloads and merges changes from the remote repository's main branch into your local branch.

**🔧 Syntax:**

```bash
git pull origin main
```

**💡 Example:**

```bash
$ git pull origin main
```

**✨ Output:**

```bash
Updating 9cb0..1bff
Fast-forward
 gitNotes.md | 476 +++++++++++++++++++++++++++++++++++++++++++++++
```

---

## ⚠️ SECTION J: Common Mistakes and Workflow Examples

_Learn from common pitfalls and master complete workflows_

### 4️⃣0️⃣ Common Mistyped Commands

> **🚨 Description:** Examples of frequently mistyped Git commands and their corrections.

**🔧 Syntax:**

```bash
# Wrong vs Correct
git status vs git status
gir merge vs git merge
girt add . vs git add .
```

**💡 Example:**

```bash
git staus     # ❌ Wrong (should be 'git status')
gir merge     # ❌ Wrong (should be 'git merge')
girt add .    # ❌ Wrong (should be 'git add .')
```

**✨ Output:**

```bash
# These would result in "command not found" errors
```

---

### 4️⃣1️⃣ Complete Git Workflow Example

> **🎪 Description:** A comprehensive example showing typical Git workflow from branch creation to merge.

**🔧 Syntax:**

```bash
# Create and switch to footer
git branch footer
git checkout footer

# Edit and commit in footer
git add index.html
git commit -m "Footer content added"

# Switch to master, commit
git checkout master
git add index.html
git commit -m "Header content added"

# Merge footer into master
git merge footer

# If conflict:
# Resolve manually
git add .
git commit -m "merged footer branch"
```

**💡 Example:**

```bash
# Create and switch to footer
git branch footer
git checkout footer

# Edit and commit in footer
git add index.html
git commit -m "Footer content added"

# Switch to master, commit
git checkout master
git add index.html
git commit -m "Header content added"

# Merge footer into master
git merge footer

# If conflict:
# Resolve manually
git add .
git commit -m "merged footer branch"
```

**✨ Output:**

```bash
# Various outputs depending on each step:
Switched to branch 'footer'
[footer abc123] Footer content added
Switched to branch 'master'
[master def456] Header content added
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
[master ghi789] merged footer branch
```

---

## 💡 Tips and Best Practices

### 🎯 **Always check status before committing:**

```bash
git status
git add .
git status
git commit -m "descriptive message"
```

### 📝 **Use meaningful commit messages:**

```bash
git commit -m "Add user authentication feature"
# Instead of: git commit -m "updates"
```

### 👀 **Review changes before staging:**

```bash
git diff
git add .
git diff --staged
```

### 🚫 **Create .gitignore early:**

```bash
echo "node_modules/" > .gitignore
echo "*.log" >> .gitignore
echo ".env" >> .gitignore
```

---
