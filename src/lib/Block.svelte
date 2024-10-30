<script lang="ts">
    import Text from "./Text.svelte";
    import Block from "./Block.svelte";
    import defaultComponents from "./defaultComponents";

    const { content } = $props();

    const { type, children, ...rest } = content;
    const { blocks } = defaultComponents;
    const BlockComponent = blocks[type];
</script>

<BlockComponent {...rest}>
    {#if children}
        {#each children as child (child)}
            {#if child.type === "text"}
                <Text {...child} />
            {:else}
                <Block content={child} />
            {/if}
        {/each}
    {/if}
</BlockComponent>
