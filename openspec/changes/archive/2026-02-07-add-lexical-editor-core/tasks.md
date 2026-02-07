## 1. Implementation
- [x] Add Lexical and icon dependencies with Bun and ensure shadcn/ui Toggle/Tooltip/Separator components are available.
- [x] Create editor core structure under src/components/editor with theme, nodes, toolbar plugin, and main editor shell.
- [x] Implement Lexical theme mappings for paragraphs, headings, and text styles using Tailwind classes.
- [x] Implement toolbar plugin with selection-aware bold/italic toggles wired to Lexical commands.
- [x] Implement Djot-ready editor shell with RichText and History plugins, styled ContentEditable, and placeholder.
- [x] Wire the editor shell into the target view for initial render (pending decision).

## 2. Validation
- [x] Verify the editor renders without runtime errors.
- [x] Verify typing works in the editor.
- [x] Verify selecting text and toggling bold applies the style.
- [x] Verify DOM reflects Tailwind classes from the Lexical theme.
