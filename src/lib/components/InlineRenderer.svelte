<script lang="ts">
    import type { InlineNode, LinkNode, InlineRendererProps } from '../types/index.js';
    import { getActiveModifiers, isTextNode, isLinkNode } from '../utils/renderer.js';

    const { nodes, modifiers }: InlineRendererProps = $props();

    /** Renders node recursively */
    function renderNode(n: InlineNode): string {
        if (isTextNode(n)) {
            let text = escapeHTML(n.text).replace(/\n/g, '<br/>');
            const active = getActiveModifiers(n);
            // wrap nested
            return active.reduce((inner, mod) => {
                const comp = modifiers[mod];
                if (typeof comp === 'string') {
                    return `<${comp}>${inner}</${comp}>`;
                }
                // component name fallback
                const tag =
                    mod === 'code'
                        ? 'code'
                        : mod === 'bold'
                          ? 'strong'
                          : mod === 'italic'
                            ? 'em'
                            : mod === 'underline'
                              ? 'u'
                              : mod === 'strikethrough'
                                ? 's'
                                : 'span';
                return `<${tag}>${inner}</${tag}>`;
            }, text);
        }
        if (isLinkNode(n)) {
            const link = n as LinkNode;
            const inner = link.children.map(renderNode).join('');
            return `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
        }
        return '';
    }

    function escapeHTML(str: string): string {
        return str.replace(
            /[<>&"']/g,
            (c) =>
                (({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' }) as any)[
                    c
                ]
        );
    }
</script>

{@html nodes.map(renderNode).join('')}
