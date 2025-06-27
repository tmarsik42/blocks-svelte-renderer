<script lang="ts">
    import Text from './Text.svelte';
    import Block from './Block.svelte';
    import defaultComponents from './defaultComponents';

    const { content } = $props();
    const { type, children, ...rest } = content;
    const { blocks } = defaultComponents;

    const BlockComponent = blocks[type];

    const augmentProps = (args: typeof content) => {
        const { children: childrenNodes, type, ...props } = args;

        if (type === 'code' || type === 'heading') {
            // Builds a plain text string from an array of nodes, regardless of links or modifiers
            const getPlainText = (children: typeof childrenNodes): string => {
                return children.reduce((currentPlainText: string, node: typeof childrenNodes) => {
                    if (node.type === 'text') {
                        return currentPlainText.concat(node.text);
                    }

                    if (node.type === 'link') {
                        return currentPlainText.concat(getPlainText(node.children));
                    }

                    return currentPlainText;
                }, '');
            };

            return {
                ...props,
                plainText: getPlainText(content.children)
            };
        }

        return props;
    };

    const augmentedProps = $derived.by(() => augmentProps(content));
</script>

{#if type === 'paragraph' && children.length === 1 && children[0].type === 'text' && children[0].text === ''}
    <br />
{:else if BlockComponent}
    <BlockComponent {...augmentedProps}>
        {#if children}
            {#each children as child (child)}
                {#if child.type === 'text'}
                    <Text {...child} />
                {:else}
                    <Block content={child} />
                {/if}
            {/each}
        {/if}
    </BlockComponent>
{/if}
