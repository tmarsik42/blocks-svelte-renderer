<script>
    const { level, plainText } = $props();
</script>

<svelte:element this={`h${level}`}>
    {plainText}
</svelte:element>
