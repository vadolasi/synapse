# Project Context

## Purpose
**Sinapse** is a local-first, block-based knowledge management tool. 
Unlike Obsidian, Sinapse uses an **SQLite database as the single source of truth**, not the file system. Text files (Djot/Markdown) are purely export artifacts, not the storage medium.
The goal is to combine the structured data capabilities of Notion (databases, properties, views) with the performance of a local application.

## Tech Stack
- **Runtime & PM:** Bun
- **Application Shell:** Electrobun (Chromium + Bun backend)
- **Frontend:** React + TailwindCSS
- **UI Component Library:** shadcn/ui
- **Editor Engine:** Lexical (React adapter)
- **Database:** SQLite (bundled via Bun/Electrobun)
- **ORM/Query Builder:** Kysely (with `bun:sqlite` driver)
- **Serialization:** Djot (for export/clipboard)
- **Data Format:** JSON (for internal block storage and dynamic properties)

## Project Conventions

### Code Style
- **TypeScript Strict Mode:** All code must be strictly typed. No `any`.
- **Functional Approach:** heavy use of pure functions, especially for AST transformations (Djot <-> Lexical).
- **Kysely Interfaces:** All DB tables must have explicit TypeScript interfaces defining their schema.
- **Naming:** `camelCase` for variables/functions, `PascalCase` for components/classes, `snake_case` for database columns.

### Architecture Patterns
- **IPC Communication:** Strict separation between Renderer (UI) and Main (Node/Bun process) using Electrobun's RPC/IPC handlers.
  - *Renderer:* Handles Lexical state, UI logic, and optimistic updates.
  - *Main:* Handles SQLite connections, file system exports, and heavy lifting.
- **Data Persistence Strategy (The "Notion" Model):**
  - **Blocks Table:** Stores content. Content is stored as a JSON blob (Lexical State) to preserve rich text features, or granularly if search requires it.
  - **Pages/Items Table:** Stores metadata and pointers to the block tree.
  - **Dynamic Properties:** Uses SQLite's JSON support. A `properties` column (TEXT/JSON) stores key-value pairs for flexible schemas (Select, Multi-select, Date, etc.) without altering the table schema.
- **Repository Pattern:** Database access is encapsulated in repositories (e.g., `BlockRepository`, `PageRepository`) to decouple Kysely logic from the IPC handlers.

### Testing Strategy
- **Unit Testing:** `bun:test` or Vitest for core logic (parsers, transformers).
- **E2E:** Playwright (if supported by Electrobun) or manual testing for IPC flows.
- **Database Tests:** In-memory SQLite instances for testing repository logic.

### Git Workflow
- **Conventional Commits:** (e.g., `feat: add kanban view`, `fix: lexical serialization`).
- **Feature Branching:** `main` is stable. Development happens on `feat/` branches.

## Domain Context
- **Block:** The atomic unit of content (Paragraph, Heading, Image, Code). Equivalent to a Notion block or Lexical Node.
- **Page:** A container for blocks. Can also be a row in a Database.
- **Property:** A dynamic attribute attached to a Page (e.g., "Status", "Priority"). Stored in a JSON column.
- **Djot:** The interchange format. Used when the user wants to "eject" content or copy-paste to external tools. It is NOT the storage format.
- **Source of Truth:** The `sinapse.db` SQLite file.

## Important Constraints
- **Performance:** Queries on JSON columns must be optimized. Use SQLite generated columns/indexes if property filtering becomes slow.
- **Bun Compatibility:** All backend dependencies must be compatible with Bun's runtime. Avoid Node.js native modules that require `node-gyp` if possible (Electrobun limitation).
- **Concurrency:** Ensure SQLite write transactions are serialized correctly to avoid locking issues in the Main process.

## External Dependencies
- **Electrobun API:** Used for Window management, Tray, and Native system dialogs.
- **Lexical Plugins:** `@lexical/react`, `@lexical/history`, etc.
- **lucide-react:** Icon set.
