<script>
    const { level, children } = $props();
</script>

<svelte:element this={`h${level}`}>
    {@render children()}
</svelte:element>
