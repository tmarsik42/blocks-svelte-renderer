<script lang="ts">
    import InlineRenderer from '../InlineRenderer.svelte';
    import type { ParagraphProps } from '$lib/types/index.js';

    const { node, modifiers }: ParagraphProps = $props();
</script>

{#if node.children.length > 0}
    <p><InlineRenderer nodes={node.children} {modifiers} /></p>
{:else}
    <br />
{/if}
