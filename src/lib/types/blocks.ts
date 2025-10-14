export interface TextNode {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

export interface LinkNode {
    type: 'link';
    url: string;
    children: (TextNode | LinkNode)[];
}

export type InlineNode = TextNode | LinkNode;

export interface ParagraphBlockNode {
    type: 'paragraph';
    children: InlineNode[];
}

export interface HeadingBlockNode {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: InlineNode[];
}

export interface QuoteBlockNode {
    type: 'quote';
    children: InlineNode[];
}

export interface CodeBlockNode {
    type: 'code';
    children: TextNode[];
}

export interface ImageBlockNode {
    type: 'image';
    image: {
        name: string;
        alternativeText?: string;
        url: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: Record<string, unknown>;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        provider: string;
        provider_metadata?: Record<string, unknown>;
        createdAt: string;
        updatedAt: string;
    };
}

export interface ListItemBlockNode {
    type: 'list-item';
    children: InlineNode[];
}

export interface ListBlockNode {
    type: 'list';
    format: 'ordered' | 'unordered';
    children: ListItemBlockNode[];
}

export type BlockNode =
    | ParagraphBlockNode
    | HeadingBlockNode
    | QuoteBlockNode
    | CodeBlockNode
    | ImageBlockNode
    | ListBlockNode
    | ListItemBlockNode;

export type RootNode = BlockNode[];
