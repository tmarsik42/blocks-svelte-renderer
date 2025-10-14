<script lang="ts">
    import ListItem from './ListItem.svelte';
    import type { ListProps } from '$lib/types/index.js';

    const { node, modifiers }: ListProps = $props();
</script>

{#if node.format === 'ordered'}
    <ol>
        {#each node.children as item, i}
            <ListItem node={item} index={i} {modifiers} />
        {/each}
    </ol>
{:else}
    <ul>
        {#each node.children as item, i}
            <ListItem node={item} index={i} {modifiers} />
        {/each}
    </ul>
{/if}
