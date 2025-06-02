<script lang="ts">
    interface TextProps {
        text: string;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        code?: boolean;
    }

    const {
        text,
        bold = false,
        italic = false,
        underline = false,
        strikethrough = false,
        code = false
    }: TextProps = $props();

    let modifiedText = text;

    if (code) {
        modifiedText = `<code>${modifiedText}</code>`;
    }
    if (strikethrough) {
        modifiedText = `<del>${modifiedText}</del>`;
    }
    if (underline) {
        modifiedText = `<u>${modifiedText}</u>`;
    }
    if (italic) {
        modifiedText = `<em>${modifiedText}</em>`;
    }
    if (bold) {
        modifiedText = `<strong>${modifiedText}</strong>`;
    }
</script>

{#if text}
    {@html modifiedText}
{:else}
    {''}
{/if}
