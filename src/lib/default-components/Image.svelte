<script>
    const { image } = $props();
</script>

<img src={image.url} alt={image.alternativeText || ""} />
