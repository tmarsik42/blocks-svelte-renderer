/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import BlocksRenderer from '../lib/BlocksRenderer.svelte';

const content = [
    {
        type: 'heading',
        level: 1,
        children: [
            {
                type: 'link',
                url: 'https://test.com',
                children: [{ type: 'text', text: 'A cool website' }]
            }
        ]
    },
    {
        type: 'paragraph',
        children: [
            { type: 'text', text: 'A simple paragraph' },
            { type: 'text', text: 'with bold text', bold: true },
            { type: 'text', text: ' and bold underlines', bold: true, underline: true }
        ]
    }
];

describe('BlocksRenderer', () => {
    describe('Props', () => {
        it('should render content using default components', () => {
            render(BlocksRenderer, { props: { content } });
            expect(screen.getByText('A simple paragraph')).toBeInTheDocument();
        });
    });

    describe('Blocks', () => {
        it('renders paragraphs with text split across children', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                { type: 'text', text: 'A paragraph' },
                                { type: 'text', text: ' with bold', bold: true }
                            ]
                        }
                    ]
                }
            });

            const paragraph = screen.getByText('A paragraph').closest('p');
            expect(paragraph).toHaveTextContent('A paragraph with bold');
        });

        it('renders a br when there is an empty paragraph', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'First paragraph' }]
                        },
                        // empty paragraph
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: '' }]
                        },
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'Second paragraph' }]
                        }
                    ]
                }
            });

            const brElement = screen.getByText('First paragraph').nextElementSibling;
            expect(brElement).toBeInTheDocument();
            expect(brElement?.tagName).toBe('BR');
        });

        it('renders paragraphs with line breaks', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [{ type: 'text', text: 'First line\nSecond line' }]
                        }
                    ]
                }
            });

            const paragraph = screen.getByText(/First line/).closest('p');

            // // Remove all HTML comments (which Svelte uses)
            const innerHTML = paragraph?.innerHTML;
            const cleanedInnerHTML = innerHTML?.replace(/<!---->/g, '');
            const paragraphParts = cleanedInnerHTML?.split('<br>');
            const finalParagraphParts = paragraphParts?.map((part) => part.trim());

            expect(finalParagraphParts).toEqual(['First line', 'Second line']);
        });

        it('renders quotes', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'quote',
                            children: [{ type: 'text', text: 'A quote' }]
                        }
                    ]
                }
            });

            const quote = screen.getByText('A quote');
            expect(quote).toBeInTheDocument();
            expect(quote.closest('blockquote')).toBeInTheDocument();
        });

        it('renders code blocks', () => {
            render(BlocksRenderer, {
                props: {
                    content: [{ type: 'code', children: [{ type: 'text', text: 'my code' }] }]
                }
            });

            const code = screen.getByText('my code');
            expect(code).toBeInTheDocument();
            expect(code.closest('code')).toBeInTheDocument();
            expect(code.closest('pre')).toBeInTheDocument();
        });

        it('renders links', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'link',
                                    url: 'https://test.com',
                                    children: [{ type: 'text', text: 'A link' }]
                                }
                            ]
                        }
                    ]
                }
            });

            expect(screen.getByRole('link', { name: /a link/i })).toBeInTheDocument();
        });

        it('renders flat lists', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'list',
                            format: 'unordered',
                            children: [
                                {
                                    type: 'list-item',
                                    children: [{ type: 'text', text: 'Item 1' }]
                                },
                                {
                                    type: 'list-item',
                                    children: [{ type: 'text', text: 'Item 2' }]
                                }
                            ]
                        }
                    ]
                }
            });

            expect(screen.getByRole('list')).toBeInTheDocument();
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(2);
            expect(items[0]).toHaveTextContent('Item 1');
            expect(items[1]).toHaveTextContent('Item 2');
        });

        it('renders nested lists', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'list',
                            format: 'ordered',
                            children: [
                                {
                                    type: 'list',
                                    format: 'unordered',
                                    children: [
                                        {
                                            type: 'list-item',
                                            children: [{ type: 'text', text: 'Nested item 1' }]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            });

            expect(screen.getAllByRole('list')).toHaveLength(2);
            expect(screen.getByRole('listitem')).toHaveTextContent('Nested item 1');
        });

        it('renders images', () => {
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
                                createdAt: '2021-01-01',
                                updatedAt: '2021-01-01'
                            },
                            children: [{ type: 'text', text: '' }]
                        }
                    ]
                }
            });

            const image = screen.getByRole('img', { name: /test/i });
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', 'https://test.com/test.jpg');
            expect(image).toHaveAttribute('alt', 'Test');
        });

        it('handles missing block components', () => {
            const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'unknown',
                            children: [{ type: 'text', text: 'Should not appear' }]
                        },
                        {
                            type: 'unknown',
                            children: [{ type: 'text', text: 'Should not appear' }]
                        },
                        {
                            type: 'unknown2',
                            children: [{ type: 'text', text: 'Should not appear' }]
                        }
                    ]
                }
            });

            expect(screen.queryByText('Should not appear')).not.toBeInTheDocument();
            warnSpy.mockRestore();
        });
    });

    describe('Modifiers', () => {
        it('renders text without modifiers', () => {
            render(BlocksRenderer, {
                props: {
                    content: [{ type: 'paragraph', children: [{ type: 'text', text: 'My text' }] }]
                }
            });
            expect(screen.getByText('My text')).toBeInTheDocument();
        });

        it('renders text with enabled modifiers', () => {
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
                                    code: true
                                }
                            ]
                        }
                    ]
                }
            });

            const text = screen.getByText('My text');
            expect(text).toBeInTheDocument();

            expect(text.closest('strong')).toBeInTheDocument();
            expect(text.closest('em')).toBeInTheDocument();
            expect(text.closest('u')).toBeInTheDocument();
            expect(text.closest('del')).toBeInTheDocument();
            expect(text.closest('code')).toBeInTheDocument();
        });

        it('ignores disabled or unknown modifiers', () => {
            const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'My text',
                                    bold: false,
                                    // @ts-expect-error unknown is an invalid prop
                                    unknown: true
                                }
                            ]
                        }
                    ]
                }
            });

            const text = screen.getByText('My text');
            expect(text).toBeInTheDocument();

            expect(text.closest('strong')).not.toBeInTheDocument();

            warnSpy.mockRestore();
        });

        it('handles missing modifier components', () => {
            const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'My paragraph',
                                    unknown: true
                                },
                                {
                                    type: 'text',
                                    text: 'Still my paragraph',
                                    unknown: true
                                }
                            ]
                        },
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'My other paragraph',
                                    unknown: true,
                                    unknown2: true
                                }
                            ]
                        }
                    ]
                }
            });

            expect(screen.getByText(/my paragraph/i)).toBeInTheDocument();
            warnSpy.mockRestore();
        });

        it('parses code blocks to plain text', () => {
            render(BlocksRenderer, {
                props: {
                    content: [
                        {
                            type: 'code',
                            children: [
                                {
                                    type: 'text',
                                    text: 'const a = 1;'
                                },
                                {
                                    type: 'link',
                                    url: 'https://test.com',
                                    children: [{ type: 'text', text: 'const b = 2;', bold: true }]
                                }
                            ]
                        }
                    ]
                }
            });

            expect(screen.getByText('const a = 1;const b = 2;')).toBeInTheDocument();
        });

        it('parses headings to plain text', () => {
            render(BlocksRenderer, {
                props: {
                    content
                }
            });

            const element = screen.getByRole('heading');
            expect(element).toHaveTextContent('A cool website');
        });
    });
});
