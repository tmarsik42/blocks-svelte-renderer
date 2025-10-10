import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const dummyData = [
        // Headings
        ...Array.from({ length: 6 }, (_, i) => ({
            type: 'heading',
            level: i + 1,
            children: [{ type: 'text', text: `Heading Level ${i + 1}` }]
        })),

        // Rich paragraph with inline styles
        {
            type: 'paragraph',
            children: [
                { type: 'text', text: 'This is a ' },
                { type: 'text', text: 'rich ', bold: true },
                { type: 'text', text: 'text ', italic: true },
                { type: 'text', text: 'example ', underline: true },
                { type: 'text', text: 'with ' },
                { type: 'text', text: 'multiple ', strikethrough: true },
                { type: 'text', text: 'modifiers and ' },
                {
                    type: 'link',
                    url: 'https://svelte.dev',
                    children: [{ type: 'text', text: 'a Svelte link' }]
                },
                { type: 'text', text: '.' }
            ]
        },

        {
            type: 'paragraph',
            children: [
                { type: 'text', text: 'This paragraph mixes every inline modifier possible: ' },
                { type: 'text', text: 'bold', bold: true },
                { type: 'text', text: ', ' },
                { type: 'text', text: 'italic', italic: true },
                { type: 'text', text: ', ' },
                { type: 'text', text: 'underline', underline: true },
                { type: 'text', text: ', ' },
                { type: 'text', text: 'bold + italic', bold: true, italic: true },
                { type: 'text', text: ', ' },
                {
                    type: 'text',
                    text: 'bold + italic + underline',
                    bold: true,
                    italic: true,
                    underline: true
                },
                { type: 'text', text: ', ' },
                { type: 'text', text: 'strikethrough', strikethrough: true },
                { type: 'text', text: ', ' },
                { type: 'text', text: 'code', code: true },
                { type: 'text', text: ', and a ' },
                {
                    type: 'link',
                    url: 'https://example.com',
                    children: [
                        { type: 'text', text: 'link inside bold italic', bold: true, italic: true }
                    ]
                },
                { type: 'text', text: '.' }
            ]
        },

        // Quote with nested paragraph and inline code
        {
            type: 'quote',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            text: '“Code is like humor. When you have to explain it, it’s bad.” — '
                        },
                        { type: 'text', text: 'Cory House', italic: true }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        { type: 'text', text: 'Remember: ' },
                        { type: 'text', text: 'keep it simple', code: true },
                        { type: 'text', text: '.' }
                    ]
                }
            ]
        },

        // Complex ordered list
        {
            type: 'list',
            format: 'ordered',
            children: [
                {
                    type: 'list-item',
                    children: [{ type: 'text', text: 'First step' }]
                },
                {
                    type: 'list-item',
                    children: [
                        { type: 'text', text: 'Second step (with sublist):' },
                        {
                            type: 'list',
                            format: 'unordered',
                            children: [
                                {
                                    type: 'list-item',
                                    children: [{ type: 'text', text: 'Point A' }]
                                },
                                {
                                    type: 'list-item',
                                    children: [
                                        { type: 'text', text: 'Point B with deep nesting' },
                                        {
                                            type: 'list',
                                            format: 'ordered',
                                            children: [
                                                {
                                                    type: 'list-item',
                                                    children: [
                                                        {
                                                            type: 'text',
                                                            text: 'Subpoint B.1'
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'list-item',
                                                    children: [
                                                        {
                                                            type: 'text',
                                                            text: 'Subpoint B.2 (contains another sublist)'
                                                        },
                                                        {
                                                            type: 'list',
                                                            format: 'unordered',
                                                            children: [
                                                                {
                                                                    type: 'list-item',
                                                                    children: [
                                                                        {
                                                                            type: 'text',
                                                                            text: 'Nested bullet a'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    type: 'list-item',
                                                                    children: [
                                                                        {
                                                                            type: 'text',
                                                                            text: 'Nested bullet b'
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            indentLevel: 3
                                                        }
                                                    ]
                                                }
                                            ],
                                            indentLevel: 2
                                        }
                                    ]
                                }
                            ],
                            indentLevel: 1
                        }
                    ]
                },
                {
                    type: 'list-item',
                    children: [{ type: 'text', text: 'Final step ✅' }]
                }
            ]
        },

        // Code blocks
        {
            type: 'code',
            children: [
                {
                    type: 'text',
                    text: `// Simple JS
const hello = name => console.log('Hello, ' + name);
hello('World');`
                }
            ]
        },
        {
            type: 'code',
            children: [
                {
                    type: 'text',
                    text: `<!-- HTML Example -->
<section>
  <h2>Sample HTML Block</h2>
  <p>This is inside a code block.</p>
</section>`
                }
            ]
        },

        // Table example
        {
            type: 'table',
            children: [
                {
                    type: 'table-row',
                    children: [
                        { type: 'table-header', children: [{ type: 'text', text: 'Feature' }] },
                        { type: 'table-header', children: [{ type: 'text', text: 'Supported' }] }
                    ]
                },
                {
                    type: 'table-row',
                    children: [
                        { type: 'table-cell', children: [{ type: 'text', text: 'Links' }] },
                        { type: 'table-cell', children: [{ type: 'text', text: '✅' }] }
                    ]
                },
                {
                    type: 'table-row',
                    children: [
                        { type: 'table-cell', children: [{ type: 'text', text: 'Nested Lists' }] },
                        { type: 'table-cell', children: [{ type: 'text', text: '✅' }] }
                    ]
                }
            ]
        },

        // Images
        {
            type: 'image',
            image: {
                url: 'https://via.placeholder.com/800x400',
                alternativeText: 'Sample Image One'
            }
        },
        {
            type: 'image',
            image: {
                url: 'https://via.placeholder.com/400x400?text=Another+Image',
                alternativeText: 'Square example image'
            }
        },

        // Paragraph with line breaks and emojis
        {
            type: 'paragraph',
            children: [
                {
                    type: 'text',
                    text: 'This paragraph includes multiple lines,\nmanual line breaks,\nand even some emoji 🎨🔥💡.'
                }
            ]
        },

        // Final paragraph
        {
            type: 'paragraph',
            children: [
                {
                    type: 'text',
                    text: 'End of dummy rich content. This should stress-test any Svelte renderer.'
                }
            ]
        }
    ];

    return json(dummyData);
};
