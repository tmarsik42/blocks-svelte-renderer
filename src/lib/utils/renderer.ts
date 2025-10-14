import type { BlockNode, LinkNode, TextNode } from '../types/index.js';

/** Text node guard */
export function isTextNode(n: TextNode): boolean {
    return n?.type === 'text';
}

/** Link node guard */
export function isLinkNode(n: LinkNode): boolean {
    return n?.type === 'link';
}

/** Collect active inline modifiers */
export function getActiveModifiers(
    n: TextNode
): Array<'bold' | 'italic' | 'underline' | 'strikethrough' | 'code'> {
    const m: Array<'bold' | 'italic' | 'underline' | 'strikethrough' | 'code'> = [];
    if (n.bold) m.push('bold');
    if (n.italic) m.push('italic');
    if (n.underline) m.push('underline');
    if (n.strikethrough) m.push('strikethrough');
    if (n.code) m.push('code');
    return m;
}

/** Merge component maps */
export function mergeComponents<T>(def: T, over?: Partial<T>): T {
    return over ? { ...def, ...over } : def;
}

/** Unique key per block */
export function generateBlockKey(node: BlockNode, idx: number): string {
    if (node.type === 'image' && node.image.hash) {
        return `img-${node.image.hash}`;
    }
    return `${node.type}-${idx}`;
}
