import ChatMessage from "./chatMessage";
import { createSignal, onMount, Show, For } from "solid-js";
import api from "~/functions/api";
import { chat, setChat } from "../signals/chat";
import ChatInput from "./chatInput";

export default function ChatHistory(args: { chatId: string }) {
	const [loading, setLoading] = createSignal(true);
	const [error, setError] = createSignal(null);

	onMount(async () => {
		try {
			const data = await api.chats.get({ chatId: args.chatId });
			console.log({ data });
			setChat(data);
		} catch (err: Error | any) {
			console.error("Error fetching messages:", err);
			setError(err.message || "An error occurred");
		}
		setLoading(false);
	});

	return (
		<div class="my-8 mx-auto flex flex-col-reverse gap-4">
			<ChatInput chatId={args.chatId} />
			<Show when={loading()}>
				<p>Loading...</p>
			</Show>
			<Show when={error()}>
				<p>Error: {error()}</p>
			</Show>
			<Show when={!loading() && !error() && chat().chatHistory.length > 0}>
				<For each={chat().chatHistory}>
					{(message) => <ChatMessage chatMessage={message} />}
				</For>
			</Show>
		</div>
	);
}
