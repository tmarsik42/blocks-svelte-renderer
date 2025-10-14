<script lang="ts">
    import InlineRenderer from '$lib/components/InlineRenderer.svelte';
    import type { HeadingProps } from '$lib/types/index.js';

    const { node, modifiers }: HeadingProps = $props();
</script>

{#if node.level === 1}
    <h1><InlineRenderer nodes={node.children} {modifiers} /></h1>
{:else if node.level === 2}
    <h2><InlineRenderer nodes={node.children} {modifiers} /></h2>
{:else if node.level === 3}
    <h3><InlineRenderer nodes={node.children} {modifiers} /></h3>
{:else if node.level === 4}
    <h4><InlineRenderer nodes={node.children} {modifiers} /></h4>
{:else if node.level === 5}
    <h5><InlineRenderer nodes={node.children} {modifiers} /></h5>
{:else}
    <h6><InlineRenderer nodes={node.children} {modifiers} /></h6>
{/if}
