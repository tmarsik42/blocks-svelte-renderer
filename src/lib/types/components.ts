import type {
    BlockNode,
    ParagraphBlockNode,
    HeadingBlockNode,
    QuoteBlockNode,
    CodeBlockNode,
    ImageBlockNode,
    ListBlockNode,
    ListItemBlockNode,
    InlineNode,
    RootNode,
} from './blocks.js';
import type { Snippet } from 'svelte';

export interface BlockComponents {
    paragraph: Snippet;
    heading: Snippet;
    quote: Snippet;
    code: Snippet;
    image: Snippet;
    list: Snippet;
    'list-item': Snippet;
}

export interface ModifierComponents {
    bold: Snippet;
    italic: Snippet;
    underline: Snippet;
    strikethrough: Snippet;
    code: Snippet;
    link: Snippet;
}

export interface BlockComponentProps {
    node: BlockNode;
    index: number;
    modifiers: ModifierComponents;
}

export interface BlocksRendererProps {
    content: RootNode;
    blocks?: Partial<BlockComponents>;
    modifiers?: Partial<ModifierComponents>;
}

export interface ParagraphProps extends BlockComponentProps {
    node: ParagraphBlockNode;
}

export interface HeadingProps extends BlockComponentProps {
    node: HeadingBlockNode;
}

export interface QuoteProps extends BlockComponentProps {
    node: QuoteBlockNode;
}

export interface CodeProps extends BlockComponentProps {
    node: CodeBlockNode;
}

export interface ImageProps extends BlockComponentProps {
    node: ImageBlockNode;
}

export interface ListProps extends BlockComponentProps {
    node: ListBlockNode;
}

export interface ListItemProps extends BlockComponentProps {
    node: ListItemBlockNode;
}

export interface InlineRendererProps {
    nodes: InlineNode[];
    modifiers: ModifierComponents;
}
