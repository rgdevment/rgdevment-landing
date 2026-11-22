---
title: "Tisty 1.49: everything you keep, joined"
description: "Brainsty draws everything you keep as one network, each document keeps what it said before, and your agents' rules live in one place you approve."
release: "1.49.0"
cover: ./network.webp
shows: "Brainsty in Tisty: documents, tasks and tags drawn from afar as one network in the content panel, with lights travelling its lines, the search on top and the legend folded in the corner"
---

I started building Tisty to solve a problem of my own, and little by little I saw it was not only mine: everyone ran into it, and each solved it their own way.

You keep a document on the house repairs, a task to ask for the roof quote and another on the gutter, and nothing tells you they are about the same thing. Each tie lives inside its own file, and you hold the map in your head.

You tidy a document, or ask your agent to, and the one line you needed is left out. A week later you want it back, and nobody kept it.

And every agent you use reads its rules from a file of its own, CLAUDE.md here and AGENTS.md there, so the same rule is written three times and drifts apart.

**Tisty was made for that:**

- What you keep is joined as you write, and you see it as one map.
- What nobody tied but is about the same thing shows apart, with its why and with no AI.
- Every document keeps what it said before.
- Your agents' rules live in one place, and a change your agent wants waits for you.
- Your agent walks that same map instead of reading everything.
- It all stays on your computer, in Markdown, with no account.

It works without an agent too, the traditional way: your notes, documents and tasks, by hand and at your own pace. This is what I wanted to tell you.

## Everything you keep, joined

Marisol keeps «House repairs», a document with the roof, the plumbing and the quotes. While writing, they type two brackets and a few words of a title, and the document links to «Gutter notes»; if it is renamed later, the link still gets there. In the same document, the / menu cites the task «Ask for the roof quote» as a live card: its date, its steps and a box to tick right there. Beside each document, **Linked from** says who names it.

Then Marisol opens **Brainsty**, under the task views in the sidebar. Everything they keep is there as one network: documents as squares, tasks as circles in their list's colour, tags as faint dots. From afar it is a map of every project, slowly turning like a globe while a few lights walk its lines. Up close, every title shows and each thing is its own icon. A click opens its card, with what it is, its dates, what points at it and its link; **Open** goes there.

What someone wrote weighs most. A citation or a mention draws two things together and shows strong; a shared tag barely moves them. And what Marisol put away stays away: a hidden or dropped task, and the diary, are not in the network.

## What is alike, with no AI

Some things are about the same thing and nobody tied them. Jaime jots «La imrpesora nueva no imprime en color», and a week later a task arrives to install the new printer. Or Jaime writes «Pagar la cuenta del agua» and an agent writes «Pay the water bill».

Brainsty joins them with an amber curve, apart from every line someone wrote, and the card says why: two uncommon words in common, a typo, like imrpesora for impresora, or a pair from a fixed Spanish–English word list made by linguists. There is no model behind it. It reads only the prose you wrote, never code or your agents' files, and it all runs on your computer.

## Go back to what a document said

Lucas asks an agent to tidy «Saturday walks» and it leaves out the times. In the panel beside the document, **See the history** lists its earlier versions, newest first, with who wrote each one: Lucas, or Claude Code. **What changed** marks in red what the agent took out and in green what it put in, and **Go back to this version** brings it back. And a paragraph Lucas deleted by hand last week is still in an earlier version too.

Tisty keeps a version when someone writes after a quiet half hour, or when the one writing changes, so what the agent replaced never mixes with what Lucas wrote. The versions stay on that computer, 30 days unless Lucas chooses fewer, and **Empty the history** takes away a text deleted on purpose.

## Your agents' rules, in one place

Yisset works with Claude Code, Codex and GitHub Copilot, and each one reads its rules from its own file. The **Agents** folder, at the top of the Library, brings those files into Tisty as documents, with their skills and their memory. **Bring** copies them, to read and arrange them; **Bring and sync** also writes a rule changed once into each agent's file, with a backup before every overwrite.

A rule in **Global** reaches all of Yisset's assistants. A change made outside Tisty is never written over. And when Yisset asks an agent to add a rule, it does not write it: the change waits on the card, beside what they approved, until they say yes.

![The window Your agents, in one place in Tisty: what it found for Claude, Codex and Copilot, a note that Gemini has nothing yet, and the buttons Bring and Bring and sync](./agents.webp)

Each computer decides what it applies, and nothing is read from the agents until the folder is clicked.

## Your agent walks it, without reading it all

The network you see is the index your agent reads. Mario asks an agent how the site certificate was renewed last year, and it finds the answer with a single search, the Archive included. From a document it reads the card first, with its sections and who cites it, and then only the part it needs. What Tisty thinks is alike reaches it apart, so it never takes it for a link someone wrote.

GitHub Copilot, Claude Code, Codex or Cursor connect over Tisty's local MCP server.

If you add Tisty's reminders in **Settings › Assistants**, every session starts with the tasks your agent left open, and a turn that changed files without noting anything in Tisty is handed back once. And what you put away stays away from it too: a hidden task named inside your writing reaches your agent as «a task out of sight», and comes back intact if it rewrites that document.

## Try it

Tisty is free and will stay free, under the AGPL-3.0 licence, for Windows and macOS, and it updates itself. If you already use it, it tells you what is new when it opens. If you are new, the welcome guide starts with you and your agent, and has a page that lets you try Brainsty on the guide itself.

Thank you to everyone who uses it every day and tells me what is missing. Brainsty is what I promised last time, and it is here.
