<script lang="ts">
    import type {
        BlockComponents,
        ModifierComponents,
        BlocksRendererProps,
    } from '$lib/types/index.js';
    import { mergeComponents, generateBlockKey } from '$lib/utils/index.js';

    import Paragraph from '$lib/components/blocks/Paragraph.svelte';
    import Heading from '$lib/components/blocks/Heading.svelte';
    import Quote from '$lib/components/blocks/Quote.svelte';
    import Code from '$lib/components/blocks/Code.svelte';
    import Image from '$lib/components/blocks/Image.svelte';
    import List from '$lib/components/blocks/List.svelte';
    import ListItem from '$lib/components/blocks/ListItem.svelte';

    import Bold from '$lib/components/modifiers/Bold.svelte';
    import Italic from '$lib/components/modifiers/Italic.svelte';
    import Underline from '$lib/components/modifiers/Underline.svelte';
    import Strikethrough from '$lib/components/modifiers/Strikethrough.svelte';
    import InlineCode from '$lib/components/modifiers/Code.svelte';
    import Link from '$lib/components/modifiers/Link.svelte';

    const { content, blocks = {}, modifiers = {} }: BlocksRendererProps = $props();

    const defaultBlocks: BlockComponents = {
        paragraph: Paragraph,
        heading: Heading,
        quote: Quote,
        code: Code,
        image: Image,
        list: List,
        'list-item': ListItem,
    };

    const defaultModifiers: ModifierComponents = {
        bold: Bold,
        italic: Italic,
        underline: Underline,
        strikethrough: Strikethrough,
        code: InlineCode,
        link: Link,
    };

    let resolvedBlocks = $derived(mergeComponents(defaultBlocks, blocks));
    let resolvedModifiers = $derived(mergeComponents(defaultModifiers, modifiers));
</script>

{#if Array.isArray(content)}
    {#each content as node, index (generateBlockKey(node, index))}
        {#if resolvedBlocks[node.type]}
            {@const Block = resolvedBlocks[node.type] as unknown as import('svelte').Component}
            <Block {node} {index} modifiers={resolvedModifiers} />
        {:else}
            <div class="blocks-renderer-unknown">
                Unknown block type: <code>{node.type}</code>
            </div>
        {/if}
    {/each}
{:else}
    <div class="blocks-renderer-empty">No content to render.</div>
{/if}

<style>
    .blocks-renderer-unknown {
        color: #b00;
        background: #fee;
        border: 1px solid #fcc;
        font-family: monospace;
        padding: 0.5em;
        margin: 0.25em 0;
        border-radius: 0.25rem;
    }

    .blocks-renderer-empty {
        color: #888;
        font-style: italic;
        margin: 0.25em 0;
    }
</style>
