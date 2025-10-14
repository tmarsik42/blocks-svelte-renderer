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
    TextNode,
} from './blocks.js';
import type { Component } from 'svelte';
import type { LinkProps, ModifierProps } from '$lib/types/modifiers.js';

export interface BlockComponents {
    paragraph: Component<ParagraphProps>;
    heading: Component<HeadingProps>;
    quote: Component<QuoteProps>;
    code: Component<CodeProps>;
    image: Component<ImageProps>;
    list: Component<ListProps>;
    'list-item': Component<ListItemProps>;
}

export interface ModifierComponents {
    bold: Component<ModifierProps>;
    italic: Component<ModifierProps>;
    underline: Component<ModifierProps>;
    strikethrough: Component<ModifierProps>;
    code: Component<ModifierProps>;
    link: Component<LinkProps>;
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

export interface TextRendererProps {
    node: TextNode;
    modifiers: ModifierComponents;
}
