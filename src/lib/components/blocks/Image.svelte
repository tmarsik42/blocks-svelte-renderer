<script lang="ts">
    import type { ImageProps } from '$lib/types/index.js';

    const { node }: ImageProps = $props();
</script>

<figure>
    <img
        src={node.image.url}
        alt={node.image.alternativeText ?? node.image.name}
        width={node.image.width}
        height={node.image.height}
    />
    {#if node.image.caption}
        <figcaption>{node.image.caption}</figcaption>
    {/if}
</figure>
