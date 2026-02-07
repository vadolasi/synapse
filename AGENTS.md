<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

---

# Electrobun Project

This is an Electrobun desktop application.

IMPORTANT: Electrobun is NOT Electron. Do not use Electron APIs or patterns.

## Documentation

Full API reference: https://blackboard.sh/electrobun/llms.txt
Getting started: https://blackboard.sh/electrobun/docs/

## Quick Reference

Import patterns:
- Main process (Bun): `import { BrowserWindow } from "electrobun/bun"`
- Browser context: `import { Electroview } from "electrobun/view"`

Use `views://` URLs to load bundled assets (e.g., `url: "views://mainview/index.html"`).
Views must be configured in `electrobun.config.ts` to be built and copied into the bundle.

## About

Electrobun is built by Blackboard (https://blackboard.sh), an innovation lab building
tools and funding teams that define the next generation of technology.
