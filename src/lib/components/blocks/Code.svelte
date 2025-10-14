<script lang="ts">
    import type { CodeProps } from '$lib/types/index.js';

    const { node }: CodeProps = $props();
</script>

<pre><code
        >{#each node.children as textNode}{textNode.text}{/each}</code
    ></pre>
