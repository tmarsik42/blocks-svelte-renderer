<script lang="ts">
    import type { LinkProps } from '$lib/types/index.js';

    const { url, children }: LinkProps = $props();
</script>

<!-- https://github.com/sveltejs/eslint-plugin-svelte/issues/1353 -->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a href={url} target="_blank" rel="noopener noreferrer">
    {@render children?.()}
</a>
