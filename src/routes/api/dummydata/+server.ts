import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const dummyData = [
        {
            type: 'heading',
            level: 1,
            children: [
                {
                    text: 'Heading 1',
                    type: 'text'
                }
            ]
        },
        {
            type: 'heading',
            level: 2,
            children: [
                {
                    text: 'Heading 2',
                    type: 'text'
                }
            ]
        },
        {
            type: 'heading',
            level: 3,
            children: [
                {
                    text: 'Heading 3',
                    type: 'text'
                }
            ]
        },
        {
            type: 'heading',
            level: 4,
            children: [
                {
                    text: 'Heading 4',
                    type: 'text'
                }
            ]
        },
        {
            type: 'heading',
            level: 5,
            children: [
                {
                    text: 'Heading 5',
                    type: 'text'
                }
            ]
        },
        {
            type: 'heading',
            level: 6,
            children: [
                {
                    text: 'Heading 6',
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Normal text',
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '',
                    type: 'text'
                }
            ]
        },
        {
            type: 'list',
            format: 'ordered',
            children: [
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'item 1',
                            type: 'text'
                        }
                    ]
                },
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'item 2',
                            type: 'text'
                        }
                    ]
                },
                {
                    type: 'list',
                    format: 'ordered',
                    children: [
                        {
                            type: 'list-item',
                            children: [
                                {
                                    text: 'item 2a',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'list-item',
                            children: [
                                {
                                    text: 'item 2b',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'list',
                            format: 'ordered',
                            children: [
                                {
                                    type: 'list-item',
                                    children: [
                                        {
                                            text: 'item 2bI',
                                            type: 'text'
                                        }
                                    ]
                                },
                                {
                                    type: 'list-item',
                                    children: [
                                        {
                                            text: 'item 2bII',
                                            type: 'text'
                                        }
                                    ]
                                },
                                {
                                    type: 'list',
                                    format: 'ordered',
                                    children: [
                                        {
                                            type: 'list-item',
                                            children: [
                                                {
                                                    text: 'in too deep 1',
                                                    type: 'text'
                                                }
                                            ]
                                        },
                                        {
                                            type: 'list',
                                            format: 'ordered',
                                            children: [
                                                {
                                                    type: 'list-item',
                                                    children: [
                                                        {
                                                            text: 'in too deep 1a',
                                                            type: 'text'
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'list',
                                                    format: 'ordered',
                                                    children: [
                                                        {
                                                            type: 'list-item',
                                                            children: [
                                                                {
                                                                    text: 'in too deep 1aI',
                                                                    type: 'text'
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    indentLevel: 5
                                                }
                                            ],
                                            indentLevel: 4
                                        }
                                    ],
                                    indentLevel: 3
                                }
                            ],
                            indentLevel: 2
                        }
                    ],
                    indentLevel: 1
                },
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'item 3',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '',
                    type: 'text'
                }
            ]
        },
        {
            type: 'list',
            format: 'unordered',
            children: [
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'point A',
                            type: 'text'
                        }
                    ]
                },
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'point B',
                            type: 'text'
                        }
                    ]
                },
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'point C',
                            type: 'text'
                        }
                    ]
                },
                {
                    type: 'list',
                    format: 'unordered',
                    children: [
                        {
                            type: 'list-item',
                            children: [
                                {
                                    text: 'point Ca',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'list',
                            format: 'unordered',
                            children: [
                                {
                                    type: 'list-item',
                                    children: [
                                        {
                                            text: 'point Caa',
                                            type: 'text'
                                        }
                                    ]
                                },
                                {
                                    type: 'list',
                                    format: 'unordered',
                                    children: [
                                        {
                                            type: 'list-item',
                                            children: [
                                                {
                                                    text: 'point Caaa',
                                                    type: 'text'
                                                }
                                            ]
                                        }
                                    ],
                                    indentLevel: 3
                                },
                                {
                                    type: 'list-item',
                                    children: [
                                        {
                                            text: 'point Cab',
                                            type: 'text'
                                        }
                                    ]
                                },
                                {
                                    type: 'list-item',
                                    children: [
                                        {
                                            text: 'point Cac',
                                            type: 'text'
                                        }
                                    ]
                                }
                            ],
                            indentLevel: 2
                        }
                    ],
                    indentLevel: 1
                },
                {
                    type: 'list-item',
                    children: [
                        {
                            text: 'point D',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '',
                    type: 'text'
                }
            ]
        },
        {
            type: 'quote',
            children: [
                {
                    text: "Penguin with a briefcase still can't file taxes.",
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '',
                    type: 'text'
                }
            ]
        },
        {
            type: 'code',
            children: [
                {
                    text: 'console.log("Hello code block!");',
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '',
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: 'In this paragraph I am going to test various text modifiers like ',
                    type: 'text'
                },
                {
                    bold: true,
                    text: 'bold',
                    type: 'text'
                },
                {
                    text: ', ',
                    type: 'text'
                },
                {
                    text: 'italics',
                    type: 'text',
                    italic: true
                },
                {
                    text: ', ',
                    type: 'text'
                },
                {
                    text: 'underline',
                    type: 'text',
                    underline: true
                },
                {
                    text: ', ',
                    type: 'text'
                },
                {
                    text: 'strikethrough',
                    type: 'text',
                    strikethrough: true
                },
                {
                    text: ', ',
                    type: 'text'
                },
                {
                    code: true,
                    text: 'inline code',
                    type: 'text'
                },
                {
                    text: ' and a link to ',
                    type: 'text'
                },
                {
                    url: 'https://www.example.com',
                    type: 'link',
                    children: [
                        {
                            text: 'example.com',
                            type: 'text'
                        }
                    ]
                },
                {
                    text: '.',
                    type: 'text'
                }
            ]
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: 'And an image example:',
                    type: 'text'
                }
            ]
        },
        {
            type: 'image',
            image: {
                url: 'https://via.placeholder.com/600x400',
                alternativeText: 'Lorem ipsum'
            }
        }
    ];

    return json(dummyData);
};
