# Blocks Svelte Renderer

A Svelte implementation of [Strapi's blocks-react-renderer](https://github.com/strapi/blocks-react-renderer), adapted for Svelte 5. This library allows you to render Strapi's new Blocks rich text editor seamlessly within your Svelte applications.

## 🚧 Work in Progress 🚧

This project is currently under active development. While core functionalities are being implemented and tested, some features may not yet be fully stable or complete.

## Installation

You can install this package via npm:

```
npm install blocks-svelte-renderer
```

## Usage

Here's a basic example of how to use the Svelte Blocks Renderer in your Svelte application:

```svelte
<script>
  import BlockRenderer from 'blocks-svelte-renderer';

  const contentBlocks = [
    { type: 'heading', level: 2, children: [{ text: 'Hello World' }] },
    { type: 'paragraph', children: [{ text: 'This is a paragraph.' }] },
    // Add more content blocks as needed
  ];
</script>

<BlockRenderer content={contentBlocks} />
```

## Default Components

The following default components are included:

- `Heading`
- `Paragraph`
- `Image`
- `Link`
- `List`
- `ListItem`
- `Quote`
- `Code`

You can customize these components according to your application's requirements.

## License

This project is licensed under the MIT Expat License. Portions of the code are derived from [Strapi's blocks-react-renderer](https://github.com/strapi/blocks-react-renderer), which is also licensed under the MIT Expat License.

## Acknowledgements

- [Strapi](https://strapi.io/) for their original blocks-react-renderer, which inspired this implementation.
