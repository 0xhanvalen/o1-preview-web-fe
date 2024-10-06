import { createResource, Show } from "solid-js";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { JSDOM } from "jsdom";

interface MarkdownRendererProps {
	content: string;
}

const MarkdownRenderer = (props: MarkdownRendererProps) => {
	async function getHTML() {
		const md = props.content || "";
		const dirtyHTML = await marked(md);
		const cleanHTML = DOMPurify.sanitize(dirtyHTML);
		return cleanHTML;
	}
	const [html] = createResource(getHTML);

	return (
		<div
			class="prose"
			innerHTML={html()}
		/>
	);
};

export default MarkdownRenderer;
