<script lang="ts">
    import Block from "./Block.svelte";

    const { content } = $props();
</script>

{#each content as contentBlock (contentBlock)}
    <Block content={contentBlock} />
{/each}
