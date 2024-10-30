<script>
    const { format, children } = $props();
</script>

{#if format === "ordered"}
    <ol>
        {@render children()}
    </ol>
{:else}
    <ul>
        {@render children()}
    </ul>
{/if}
