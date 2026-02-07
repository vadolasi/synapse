# Change: Add Lexical editor core (Djot-ready shell)

## Why
We need a foundational editor shell for Sinapse so users can type, format basic text, and establish the Lexical base for future Djot serialization.

## What Changes
- Add a Lexical editor core composed of a theme, node registry, toolbar, and editor shell.
- Introduce a basic toolbar using shadcn/ui toggles for bold and italic formatting.
- Wire in Lexical Rich Text, History, and Markdown Shortcut plugins.
- Edit the main page (`/`) to render the editor for testing purposes.

## Impact
- Affected specs: editor-core (new)
- Affected code: `src/components/editor/*`, `src/App.tsx` (or router config), package.json dependencies.

## Open Questions
- Do we want a read-only mode toggle in the initial shell, or defer to a later capability? (Deferred to next iteration)
