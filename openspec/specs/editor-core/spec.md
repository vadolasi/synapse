# editor-core Specification

## Purpose
TBD - created by archiving change add-lexical-editor-core. Update Purpose after archive.
## Requirements
### Requirement: Provide Lexical editor core dependencies
The system SHALL include the Lexical editor packages and icon set required for the editor shell and toolbar.

#### Scenario: Dependencies are available
- **WHEN** the project installs dependencies for the editor core
- **THEN** the Lexical React packages and icon library are available to the editor components

### Requirement: Provide a Tailwind-based Lexical theme
The system SHALL define a Lexical theme mapping core node types to Tailwind classes for paragraphs, headings, and inline styles.

#### Scenario: Theme styles are applied
- **WHEN** a user types paragraphs and headings or applies inline formatting
- **THEN** the rendered DOM uses the Tailwind classes defined in the Lexical theme

### Requirement: Provide a basic formatting toolbar
The system SHALL provide a toolbar that exposes bold and italic formatting actions using shadcn/ui toggles.

#### Scenario: Toggle formatting
- **WHEN** a user selects text and toggles bold or italic in the toolbar
- **THEN** the selected text updates its formatting state accordingly

### Requirement: Provide a Djot-ready editor shell
The system SHALL expose a React component that composes Lexical with Rich Text and History plugins, a styled content editable, and a placeholder.

#### Scenario: Editor initialization
- **WHEN** the editor shell component renders
- **THEN** the editor is ready for typing with a visible placeholder when empty

