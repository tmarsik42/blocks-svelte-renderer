import { page } from '@vitest/browser/context';
import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlocksRenderer from '$lib/components/BlocksRenderer.svelte';

const content = [
    {
        type: 'heading',
        level: 1,
        children: [
            {
                type: 'link',
                url: 'https://test.com',
                children: [{ type: 'text', text: 'A cool website' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { type: 'text', text: 'A simple paragraph' },
            { type: 'text', text: 'with bold text', bold: true },
            { type: 'text', text: ' and bold underlines', bold: true, underline: true },
        ],
    },
];

describe('BlocksRenderer', () => {
    describe('Props', () => {
        it('should render content using default components', async () => {
            render(BlocksRenderer, { props: { content } });
            const paragraph = page.getByText('A simple paragraph');
            await expect.element(paragraph).toBeInTheDocument();
        });
    });

    describe('Blocks', () => {
        it('renders paragraphs with text split across children', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                { type: 'text', text: 'A paragraph' },
                                { type: 'text', text: ' with bold', bold: true },
                            ],
                        },
                    ],
                },
            });

            const para = page.getByText('A paragraph with bold');
            await expect.element(para).toBeInTheDocument();
        });

        it('renders a br when there is an empty paragraph', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'First paragraph' }],
                        },
                        { type: 'paragraph', children: [{ type: 'text', text: '' }] },
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'Second paragraph' }],
                        },
                    ],
                },
            });

            const first = page.getByText('First paragraph');
            const firstElement = first.element();
            const nextElement = firstElement.nextElementSibling;
            expect(nextElement?.tagName.toLowerCase()).toBe('br');
        });

        it('renders paragraphs with line breaks', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'First line\nSecond line' }],
                        },
                    ],
                },
            });

            const lines = page.getByText('First line');
            const pElement = lines.element().closest('p');
            expect(pElement).not.toBeNull();
            const html = pElement!.innerHTML.replace(/<!---->/g, '');
            const parts = html.split('<br>').map((s) => s.trim());
            expect(parts).toEqual(['First line', 'Second line']);
        });

        it('renders quotes', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [{ type: 'quote', children: [{ type: 'text', text: 'A quote' }] }],
                },
            });

            const quote = page.getByText('A quote');
            await expect.element(quote).toBeInTheDocument();
            const quoteElement = quote.element().closest('blockquote');
            expect(quoteElement).not.toBeNull();
        });

        it('renders code blocks', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [{ type: 'code', children: [{ type: 'text', text: 'my code' }] }],
                },
            });

            const code = page.getByText('my code');
            await expect.element(code).toBeInTheDocument();
            const codeElement = code.element().closest('code');
            expect(codeElement).not.toBeNull();
            const preElement = code.element().closest('pre');
            expect(preElement).not.toBeNull();
        });

        it('renders links', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'link',
                                    url: 'https://test.com',
                                    children: [{ type: 'text', text: 'A link' }],
                                },
                            ],
                        },
                    ],
                },
            });

            const link = page.getByRole('link', { name: 'A link' });
            await expect.element(link).toBeInTheDocument();
        });

        it('renders flat lists', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'list',
                            format: 'unordered',
                            children: [
                                { type: 'list-item', children: [{ type: 'text', text: 'Item 1' }] },
                                { type: 'list-item', children: [{ type: 'text', text: 'Item 2' }] },
                            ],
                        },
                    ],
                },
            });

            const list = page.getByRole('list');
            await expect.element(list).toBeInTheDocument();
            const items = page.getByRole('listitem');
            const allItems = items.elements();
            expect(allItems).toHaveLength(2);
            await expect.element(items.first()).toHaveTextContent('Item 1');
        });

        it('renders nested lists', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'list',
                            format: 'ordered',
                            children: [
                                {
                                    type: 'list-item',
                                    children: [
                                        { type: 'text', text: 'First item' },
                                        {
                                            type: 'list',
                                            format: 'unordered',
                                            children: [
                                                {
                                                    type: 'list-item',
                                                    children: [
                                                        { type: 'text', text: 'Nested item 1' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            });

            const lists = page.getByRole('list');
            expect(lists.elements()).toHaveLength(2);
            await expect.element(page.getByText('Nested item 1')).toBeInTheDocument();
        });

        it('renders images', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'image',
                            image: {
                                name: 'test',
                                alternativeText: 'Test',
                                caption: 'Test',
                                width: 100,
                                height: 100,
                                formats: {},
                                hash: 'test',
                                ext: 'jpg',
                                mime: 'image/jpeg',
                                url: 'https://test.com/test.jpg',
                                size: 100,
                                provider: 'local',
                                createdAt: '',
                                updatedAt: '',
                            },
                            children: [],
                        },
                    ],
                },
            });

            const img = page.getByRole('img', { name: 'Test' });
            await expect.element(img).toHaveAttribute('src', 'https://test.com/test.jpg');
        });
    });

    describe('Modifiers', () => {
        it('renders text without modifiers', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [{ type: 'paragraph', children: [{ type: 'text', text: 'My text' }] }],
                },
            });
            await expect.element(page.getByText('My text')).toBeInTheDocument();
        });

        it('renders text with enabled modifiers', async () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'My text',
                                    bold: true,
                                    italic: true,
                                    underline: true,
                                    strikethrough: true,
                                    code: true,
                                },
                            ],
                        },
                    ],
                },
            });

            const txt = page.getByText('My text');
            const element = txt.element();

            expect(element.closest('strong')).not.toBeNull();
            expect(element.closest('em')).not.toBeNull();
            expect(element.closest('u')).not.toBeNull();
            expect(element.closest('s')).not.toBeNull();
            expect(element.closest('code')).not.toBeNull();
        });
    });
});
