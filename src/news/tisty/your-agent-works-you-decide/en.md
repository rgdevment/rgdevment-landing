---
title: "Tisty 1.51: your agent does the work, you decide in one pass"
description: "What your agent says it finished waits in one place for your word, your rules and hooks reach every agent, and your own half, writing, never waits."
release: "1.51.0"
video: "/tisty-brainsty-network"
shows: "Brainsty in Tisty: the whole network of documents, tasks and tags glows in colour as it turns, then comes close to the tag agent and opens the card of a task with what joins it"
---

More and more of the work is shared. Your agent works the detail: it picks up the task, writes, tries, says when it is done. You keep the course: you set how it works, check what it did and decide what closes. Tisty 1.51 makes both halves lighter.

- **Your agent says it is done, you decide in one pass.** Everything your agents say they finished waits in one list, with both answers on each row.
- **Your rules and your hooks, in every agent.** You write a hook once and it reaches every agent that takes hooks, and your rules reach the agents you run inside WSL too. Nothing runs without your yes.
- **Your half, without waiting.** Every letter you type shows the moment you press the key, whatever runs underneath.
- **Tisty keeps itself current.** If you want, a new version installs when you quit or open Tisty, never while you work.
- **Folders six levels deep,** with one thing to know if you sync more than one computer.

It all stays on your computer, in Markdown and with no account, and it works the same on your own.

## Your agent says it is done, you decide in one pass

Mario works with an agent on each of three projects. Over the week they said three tasks were done and that one should not be done at all. Nothing closes without Mario, so on Friday all four were waiting, each in its own list.

In Tasks, after All, a chip **◆ To confirm** now says how many wait, and it shows only while something does. Each row says what the agent said and offers both answers right there: **Complete**, or **Not doing it** when the agent said it should not be done, and **Still to do**, which takes the mark off and leaves the task open. Narrow the view to one list and it counts only that list. Mario answers the four in a minute. Steps an agent calls done still wait on their task's page, counted apart until Mario ticks them.

It works the other way too: when Mario drops a task, the agent now reads it as one Mario decided not to do.

## Your rules and your hooks, in every agent

Marisol wants every agent to run a short check before it writes files in a repository. Until now that meant editing each agent's settings by hand, in a different format each time, and hoping none was left out.

In **Agents › Global › Hooks**, the **+** button asks for a name, the kind of script, the moment it runs (when a session starts, before or after a tool, at the end of a turn), the tools and the agents. Marisol writes the script on its own page. **Register** shows the whole script and every file it will touch before it writes anything, one yes per hook and per computer. **Verify** says, agent by agent, whether it is in place, and **Try it once** runs it with a sample input. It reaches Claude Code, Codex, Cursor, GitHub Copilot, Antigravity CLI and Gemini CLI.

The line between both halves stays where it was: a hook runs code on your computer, so if the script changes it waits for a new yes, and no agent can create or change one. And when two documents in Agents would write the same file, Tisty asks Marisol which one rules on that computer, and writes neither until then.

Global also puts your own rules, skills and hooks first, and Tisty's apart. Tisty's own skills, which teach your agent to pick up where it left off and leave the work ready for the next one, and its hooks, which hand your agent its open tasks when a session starts, now share one row with a dot that says whether both are on. Its card, **Tisty in your agents**, says in two lines what they do, and **Turn on both** lists the files it will write before writing them. Each skill keeps a single copy for all your agents, with a button to refresh it.

### Your agents in WSL work with your rules too

Jaime runs Claude Code inside Ubuntu, under WSL, and that agent read its own folder, where none of Jaime's rules lived: the same project, two agents, two ways of working. Once Jaime looks into that distro from **Settings › Agents**, it gets two switches of its own, off until Jaime says yes: one for the rules and skills in Agents, one for Tisty's skills. Tisty writes them there the way Linux expects, never reads anything back, and leaves memory and hooks on Windows. A file changed inside Ubuntu is left alone. And an agent in WSL, or one installed another way, keeps finding Tisty.

## Your half, without waiting

While agents work, your part is reading, deciding and writing what only you know. Yisset is writing the manual of a system, a document of many pages, on a laptop that is also running a build. Before, every key waited its turn behind whatever Tisty was doing, and on a busy computer an Enter or a space could show up late. Now the page writes the letters itself, at once, and Tisty saves right behind it. A sync round or the Ideas sheet no longer stalls the page.

Smaller things you will notice while you write:

- Delete or Backspace beside a table, a diagram or a sticky note takes it whole, and Ctrl + Z brings it back in one press.
- Copying from a page gives other apps formatted text, and what you paste from Word, the web, a code editor or a terminal lands clean and formatted.
- A right-click on the page offers the spelling suggestions, cut, copy, paste and what that block can do.
- A document follows the width of the window, up to its own width, and the paper look stays for print view.

## Tisty keeps itself current

Mario had a new version waiting for days, because there was always a session open. Now **Install updates automatically**, in **Settings › Help and about**, does it for you: the new version downloads in the background, checked against its signature, and installs when you quit or open Tisty, also when the computer starts, never while you work. After the next update, Tisty asks you once whether you want this.

The copy from the Microsoft Store keeps updating through the Store. And if an update cannot be installed, a button takes you to the website to download it.

## A library as deep as your projects

Jaime keeps clients inside work, each client with its years and each year with its audits, and the folders ran out of levels. They now nest up to six levels deep.

One thing to know before you use them: every computer you sync with has to update to this version. One that has not yet stops syncing until it does, and loses nothing meanwhile.

Tidying up is lighter too. Pick several documents, with **Select** in a document's menu or with Shift and the arrows, and a right-click acts on all of them. Several documents ask first. A lone one goes without a question, and for ten seconds **Undo**, or Ctrl + Z, brings it back. Deleting a folder moves what it holds to the folder above it, so nothing is lost.

## Also in this version

- **One History.** In Agents, a rule's earlier versions and the copies of its file are in the same list.
- **Each place keeps its own.** Ideas, the Diary and Agents keep only their own documents.
- **A tidier sidebar.** Its menus share one shape, and New is always in sight.

## Try it

Tisty is free and will stay free, under the AGPL-3.0 licence, for Windows and macOS. If you already use it, this is a good version to turn on automatic updates: the next ones will arrive on their own. If you are new, the welcome guide starts with you and your agent, and it lets you walk Brainsty, the network at the top of this page, on the guide itself.

Thank you to everyone who uses it every day, with an agent or on their own, and tells me where it gets in the way. Keep telling me: that is how the next version starts.
