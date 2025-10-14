<script lang="ts">
    import BlocksRenderer from '../BlocksRenderer.svelte';
    import type { QuoteProps } from '$lib/types/index.js';

    const { node, modifiers }: QuoteProps = $props();
</script>

<blockquote>
    <BlocksRenderer content={node.children} blocks={{}} {modifiers} />
</blockquote>
