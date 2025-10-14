<script lang="ts">
    import BlocksRenderer from '$lib/components/BlocksRenderer.svelte';
    import GreenBold from './GreenBold.svelte';
    import RedHeading from './RedHeading.svelte';

    const { data } = $props();
</script>

<h1>Showcase</h1>

<h2>Quick start:</h2>
{#if data.dummydata}
    <BlocksRenderer content={data.dummydata} />
{:else}
    Something went wrong with a showcase :(
{/if}

<h2>Custom blocks and modifiers:</h2>
{#if data.dummydata}
    <BlocksRenderer
        content={data.dummydata}
        blocks={{ heading: RedHeading }}
        modifiers={{ bold: GreenBold }}
    />
{:else}
    Something went wrong with a showcase :(
{/if}
