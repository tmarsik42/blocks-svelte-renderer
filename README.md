# Blocks Svelte Renderer

[![npm version](https://img.shields.io/npm/v/blocks-svelte-renderer)](https://www.npmjs.com/package/blocks-svelte-renderer)
[![npm downloads](https://img.shields.io/npm/dm/blocks-svelte-renderer)](https://www.npmjs.com/package/blocks-svelte-renderer)
[![GitHub license](https://img.shields.io/github/license/tmarsik42/blocks-svelte-renderer)](https://github.com/tmarsik42/blocks-svelte-renderer/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/tmarsik42/blocks-svelte-renderer/ci.yml?branch=main)](https://github.com/tmarsik42/blocks-svelte-renderer/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Svelte](https://img.shields.io/badge/Svelte-5-orange.svg)](https://svelte.dev/)

> A modern, type-safe Svelte renderer for Strapi's Blocks rich text editor. Built for Svelte 5 with full TypeScript support.

## Features

- 🚀 **Svelte 5 Ready** - Built with the latest Svelte runes system
- 📝 **Type Safe** - Full TypeScript support with comprehensive type definitions
- 🔧 **Zero Config** - Works out of the box with sensible defaults
- 📦 **Lightweight** - Minimal bundle size with tree-shaking support
- 🎨 **Customizable** - Override any block or modifier component
- 🧪 **Well Tested** - Comprehensive test suite

## Installation
```
npm install @your-scope/blocks-svelte-renderer

or

pnpm add @your-scope/blocks-svelte-renderer

or

yarn add @your-scope/blocks-svelte-renderer
```

## Quick Start
```sveltehtml
<script lang="ts">
    import { BlocksRenderer } from 'blocks-svelte-renderer';

    const content = [ { type: 'paragraph', children: [{ type: 'text', text: 'Hello, World!' }] } ];
</script>

<BlocksRenderer {content} />
```


## Documentation

- [Getting Started](./docs/getting-started.md)
- [API Reference](./docs/api-reference.md)

- [Migration Guide](./docs/migration-guide.md)

## Examples

Check out our [examples directory](./examples/) for complete implementation examples:

- [Basic Usage](./examples/basic/)
- [Custom Components](./examples/custom-components/)
- [SvelteKit Integration](./examples/sveltekit-integration/)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Tadeáš Maršík](LICENSE)

## Acknowledgments

This project is inspired by and maintains compatibility with Strapi's official [blocks-react-renderer](https://github.com/strapi/blocks-react-renderer).

