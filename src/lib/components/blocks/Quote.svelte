<script lang="ts">
    import InlineRenderer from '../InlineRenderer.svelte';
    import type { QuoteProps } from '$lib/types/index.js';

    const { node, modifiers }: QuoteProps = $props();
</script>

<blockquote>
    <InlineRenderer nodes={node.children} {modifiers} />
</blockquote>
