import type { BlockNode, TextNode } from '../types/index.js';

/** Text node guard */
export function isTextNode(n: any): n is TextNode {
    return n?.type === 'text' && typeof n.text === 'string';
}

/** Link node guard */
export function isLinkNode(n: any): boolean {
    return n?.type === 'link' && typeof n.url === 'string';
}

/** Collect active inline modifiers */
export function getActiveModifiers(
    n: TextNode
): Array<'bold' | 'italic' | 'underline' | 'strikethrough' | 'code'> {
    const m: any[] = [];
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
    if (node.type === 'image' && (node as any).image.hash) {
        return `img-${(node as any).image.hash}`;
    }
    return `${node.type}-${idx}`;
}
