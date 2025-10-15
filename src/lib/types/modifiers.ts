import type { TextNode, LinkNode } from '$lib/types/blocks.js';
import type { Snippet } from 'svelte';

export interface ModifierProps {
    children?: Snippet;
    node?: TextNode | LinkNode;
}

export interface LinkProps extends ModifierProps {
    url: string;
    node?: LinkNode;
}
