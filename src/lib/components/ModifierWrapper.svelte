<script lang="ts">
    import ModifierWrapper from './ModifierWrapper.svelte';

    const { text, mods, modifiers, index = 0 } = $props();

    const currentMod = $derived(mods[index]);
    const Modifier = $derived(currentMod ? modifiers[currentMod] : null);
    const hasMore = $derived(index < mods.length - 1);
</script>

{#if Modifier}
    <Modifier>
        {#if hasMore}
            <ModifierWrapper {text} {mods} {modifiers} index={index + 1} />
        {:else}
            {text}
        {/if}
    </Modifier>
{:else}
    {text}
{/if}
