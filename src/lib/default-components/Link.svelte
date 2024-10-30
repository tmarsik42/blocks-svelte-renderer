<script>
    const { url, children } = $props();
</script>

<a href={url}>
    {@render children()}
</a>
