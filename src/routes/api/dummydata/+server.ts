import {json, type RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const dummyData = [
        {
            "type": "heading",
            "level": 1,
            "children": [
                {
                    "text": "Lorem Ipsum Dolor Sit Amet",
                    "type": "text"
                }
            ]
        },
        {
            "type": "paragraph",
            "children": [
                {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
                    "type": "text"
                }
            ]
        },
        {
            "type": "image",
            "image": {
                "url": "https://via.placeholder.com/600x400",
                "alternativeText": "Lorem ipsum"
            }
        },
        {
            "type": "link",
            "url": "https://example.com",
            "children": [
                {
                    "text": "Visit our placeholder website",
                    "type": "text"
                }
            ]
        }
        // TODO add rest of the components
    ];

    return json(dummyData);
};
