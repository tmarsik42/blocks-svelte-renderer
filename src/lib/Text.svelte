<script lang="ts">
    const {
        text,
        bold = false,
        italic = false,
        underline = false,
        strikethrough = false,
        code = false
    }: TextProps = $props();
</script>

{#if text}
    {#if bold}
        <strong>{text}</strong>
    {:else if italic}
        <em>{text}</em>
    {:else if underline}
        <u>{text}</u>
    {:else if strikethrough}
        <del>{text}</del>
    {:else if code}
        <code>{text}</code>
    {:else}
        {text}
    {/if}
{/if}
