import Code from "./default-components/Code.svelte";
import Heading from "./default-components/Heading.svelte";
import Image from "./default-components/Image.svelte";
import Link from "./default-components/Link.svelte";
import List from "./default-components/List.svelte";
import ListItem from "./default-components/ListItem.svelte";
import Paragraph from "./default-components/Paragraph.svelte";
import Quote from "./default-components/Quote.svelte";

export default {
    blocks: {
        paragraph: Paragraph,
        quote: Quote,
        code: Code,
        heading: Heading,
        link: Link,
        list: List,
        "list-item": ListItem,
        image: Image
    },
    modifiers: {
        bold: "strong",
        italic: "em",
        underline: "u",
        strikethrough: "del",
        code: "code"
    }
};
