<script lang="ts">
    import InlineRenderer from '../InlineRenderer.svelte';
    import BlocksRenderer from '../BlocksRenderer.svelte';
    import type { ListItemProps } from '$lib/types/index.js';

    const { node, modifiers }: ListItemProps = $props();
</script>

<li>
    {#each node.children as child, i (`${child.type}-${i}`)}
        {#if child.type === 'text' || child.type === 'link'}
            <InlineRenderer nodes={[child]} {modifiers} />
        {:else}
            <BlocksRenderer content={[child]} blocks={{}} {modifiers} />
        {/if}
    {/each}
</li>
