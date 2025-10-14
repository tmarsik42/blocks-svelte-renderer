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

export interface BlockComponents {
    paragraph: any;
    heading: any;
    quote: any;
    code: any;
    image: any;
    list: any;
    'list-item': any;
}

export interface ModifierComponents {
    bold: any;
    italic: any;
    underline: any;
    strikethrough: any;
    code: any;
    link: any;
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
