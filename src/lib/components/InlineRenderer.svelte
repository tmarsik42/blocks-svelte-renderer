<script lang="ts">
    import InlineRenderer from './InlineRenderer.svelte';
    import TextRenderer from './TextRenderer.svelte';
    import { isTextNode, isLinkNode } from '../utils/renderer.js';
    import type { InlineRendererProps } from '$lib';

    const { nodes, modifiers }: InlineRendererProps = $props();
</script>

{#each nodes as node, i (`${node.type}-${i}`)}
    {#if isTextNode(node)}
        <TextRenderer {node} {modifiers} />
    {:else if isLinkNode(node)}
        {@const Link = modifiers.link}
        <Link url={node.url}>
            <InlineRenderer nodes={node.children} {modifiers} />
        </Link>
    {/if}
{/each}
