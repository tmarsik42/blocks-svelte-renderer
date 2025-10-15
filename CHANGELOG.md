# blocks-svelte-renderer

## 1.0.1

### Patch Changes

- ee969c8: Export additional renderers for ease of making custom components.

## 1.0.0

### Major Changes

- f913ed4: # 1.0.0

  This release introduces major structural improvements, feature additions, and CI enhancements across the Svelte package.

  ## Highlights

  ### Refactor and architecture
  - restructured the codebase for maintainability and clarity,
  - separated components into blocks and modifiers,
  - simplified rendering logic,
  - improved type safety and error handling,
  - renamed and cleaned up test structure for consistency.

  ### Features
  - render modifiers as independent Svelte components,
  - safer and more idiomatic approach
  - now supports everything the original library does (stacking modifiers, custom components, etc),
  - added examples for custom component usage

  ### Fixes
  - corrected rendering of quotes and line breaks,
  - fixed renderer types,
  - addressed lint and Svelte check issues.

  ### Chore & CI
  - added and refined GitHub workflows, templates, and dependabot rules,
  - introduced ESLint and improved Vitest setup,
  - added changeset configuration,
  - removed legacy scripts and unified build/release processes,
  - improved package.json and project configs.
