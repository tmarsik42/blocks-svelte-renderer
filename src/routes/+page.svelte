<script lang="ts">
    import BlocksRenderer from '$lib/BlocksRenderer.svelte';

    const { data } = $props();
</script>

{#if data.dummydata}
    <BlocksRenderer content={data.dummydata} />
{:else}
    Something went wrong with a showcase :(
{/if}
