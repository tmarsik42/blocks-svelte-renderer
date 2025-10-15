<script lang="ts">
    import ModifierWrapper from './ModifierWrapper.svelte';
    import { getActiveModifiers } from '../utils/renderer.js';
    import type { TextRendererProps } from '$lib/types/components.js';

    const { node, modifiers }: TextRendererProps = $props();

    const parts = $derived(node.text.split('\n'));
    const activeMods = $derived(getActiveModifiers(node));
</script>

{#each parts as part, i (`${part}-${i}`)}
    <ModifierWrapper text={part} mods={activeMods} {modifiers} />
    {#if i < parts.length - 1}<br />{/if}
{/each}
