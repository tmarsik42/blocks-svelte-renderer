<script lang="ts">
    import type { ModifierProps } from '$lib/types/index.js';

    const { children }: ModifierProps = $props();
</script>

<u>{@render children?.()}</u>
