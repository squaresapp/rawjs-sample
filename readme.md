
# Minimal RawJS Project

This repository demonstrates a minimal RawJS project setup. You can clone this repository in order to get a good starting point for a front-end project using RawJS.

The project demonstrates basic app development and project organization using RawJS, hierarchial routing (via Rawter), `vite` as the build server, and a code-workspace configured for debugging. Be sure to open the code-workspace file into VS code in order to get step debugging to work.

## Online Demo

The demo project is basic CSS color viewer. You can see an online demo of the project at
(https://rawjssample.pages.dev)[https://rawjssample.pages.dev]

## Trade-offs

These are the limitations you need to accept with this project structure:

- You have to use TypeScript (duh)
- You have to be disciplined to only use dependencies that are published on jsdelivr (`npm install` programmers need to clean up their act)

These are the advantages you gain:

- Efficient one-class-per file project structure
- No `import` dumpster at the top of each file. Forget imports even existed. Just access whatever you want, wherever you want. TypeScript knows where to find it.
- TypeScript namespaces provide arguably better encapsulation than ES modules.
- No bundler, no build system. Near-zero complexity.
- TypeScript builds your app in milliseconds, even if your app gets huge.
