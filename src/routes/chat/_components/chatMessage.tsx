import { Component, Show } from "solid-js";
import MarkdownRenderer from "~/components/MarkdownRenderer";
interface ChatMessage {
	role: "user" | "assistant";
	content: string;
}

export default function ChatMessage(props: { chatMessage: ChatMessage }) {
	const isUser = props.chatMessage.role === "user" ? true : false;
	return (
		<div class="flex border-b-2 py-4 max-w-[75ch] bg-white">
			<Show when={isUser}>
				<div class="p-2 rounded-lg text-right">
					<MarkdownRenderer content={props.chatMessage.content} />
				</div>
			</Show>
			<Show when={!isUser}>
				<div class="p-2 rounded-lg text-left">
					<MarkdownRenderer content={props.chatMessage.content} />
				</div>
			</Show>
		</div>
	);
}
