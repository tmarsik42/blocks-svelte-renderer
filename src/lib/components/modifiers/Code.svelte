<script lang="ts">
    import type { ModifierProps } from '$lib/types/index.js';

    const { children }: ModifierProps = $props();
</script>

<code>{@render children?.()}</code>
