<script lang="ts">
    import InlineRenderer from '../InlineRenderer.svelte';
    import type { ParagraphProps } from '$lib/types/index.js';

    const { node, modifiers }: ParagraphProps = $props();
</script>

{#if node.children.length === 0}
    <br />
{:else if node.children.length === 1 && node.children[0].type === 'text' && node.children[0].text === ''}
    <br />
{:else}
    <p><InlineRenderer nodes={node.children} {modifiers} /></p>
{/if}
