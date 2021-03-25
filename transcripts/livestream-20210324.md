# Transcript du Livestream

## Ordre du jour

- git fetch from upstream fork
- edit our first html document

## Contributing to an opensource repository.

### Workflow

The good practice to submit a modification to a project is :
- First, in github, fork the project you want to modify.
- Clone your fork on your local machine.
- Add the ~upstream~ remote to your local repository.
- Fetch & Pull latest updates.
- Make your modifications (stage them and commit them, multiple times
  if needed)
- Push you modifications to your own fork.
- In github, create a pull request to the official repository.
- Wait for the validation of your PR.

### Forking

First, on github, you can fork the repository thanks to the
`Fork`button in the upper-right corner. This will create a full clone
of the repository under your own workspace
(https://github.com/<your-pseudo>/).

### Cloning

In your forked repository page on GitHub, there is a button called
`"Code"`. You can click on it and select the URL.

Now go in your workdirectory, open a terminal and type in :
- `git clone <url>`

### Add the upstream remote on your local machine

Now, you can see that you have a default remote.
Execute : `git remote --verbose`

You should see the whole list of remote repositories you have. At this
step, you should only have `origin (fetch)` and `origin (push)`
pointing to your own fork. Let's add the `upstream` repository, aka
the official one.

Execute : `git remote add upstream <url>` with the upstream git URL
(you get it the same way you got your own fork URL, but on the
official repository).

Now, if you execute again `git remote --verbose` you should have 4
entries (2 for origin, 2 for upstreams).

### Pulling latest updates.

Let's say that while you were sleeping, someone at the other side of
the planet pushed commits to the official repository. You would like
to get them before working on the codebase.

Execute : `git pull upstream [branch]` (branch may be optional and
default to your current branch OR replace it by the branch you want to
pull (usually, main))

Now, if everything went well, you have the latest updates on your
machine. Check it with `git log` !

### Make modifications and commit them

You can work on your repo now. Just create a file like `blabla.txt`.
Execute `git status`. You can see that your freshly created file has
been detected by git, but is not tracked by git yet. Just add it to
git with `git add blabla.txt`. Now, `git status` again, to check that
it has indeed been added. But it is not commit yet. Let's commit it
with `git commit --message "Added blabla.txt file"`. Great, your
modifications have been commited.

Check everything with git status. Now you can see that your local
version of the repository is 1 commit ahead of the remote one. (Check
it with `git log`)

### Pushing to your own fork.

You are ready to push ? Then `git push origin [branch]` !

### Create a pull request

Go to your github repository page. Github will automagically warn you that a new
commit has been pushed and will suggest you to create a Pull Request
from your fork to the official repository. Just do it !

## Editing your first HTML Document

### What is an HTML document

An HTML document is nothing more than a text file, written in the XML
Format (`<tags>` everywhere ! (In our context "Tag" translate to
"balise" in French). Every navigator is able to read an HTML file and
to render it to the screen in a more or less beautiful manner.

An HTML document can also contain styles and javascript code
snippets, to interact with the user.

### Some example of tags

In this live, we talked about some tags :
- `<html>` is the root tag that contains the whole document (metadata,
  scripts, and body).
- `<head>` is the tag that contains many `<meta/>`data about the HTML
  document itself.
- `<body>` is the root tag that contains the whole body of the page.
- `<h1>`, ..., `<h6>` "headings". They are use for titling, sub-titling,
  sub-...-sub-titling.
- `<input type="...">` inputs. They are used to gather user input and
  majke our documents more interactives. They can have many types
  ("text", "radio", ....)
- `<button>`: Buttons are used to wait for clicks, that must be bound
  to action triggers in javascript.
- `<script>` : Contains or refers to scripts (mainly javascript) that
  must be executed on page load.

### Javascript snippet

You can access to the whole HTML document object in Javascript thanks
to the `document` variable. It contains utility function to navigate
through the HTML tree data structure, called the DOM.
For example : `document.getElementById("myid")`gets the HTML element
we want, given its id.

You can register an action to execute (i.e. a function call) when an
event occurs. For exemple, you can bind an action to a button click
event with `myButtonElement.addEventListener("click", () => {
console.log("Button clicked")})`
