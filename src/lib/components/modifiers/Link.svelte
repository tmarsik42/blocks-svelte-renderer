<script lang="ts">
    import type { LinkProps } from '$lib/types/index.js';

    const { url, children }: LinkProps = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
    {@render children?.()}
</a>
