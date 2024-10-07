import { createSignal, onMount, Show, For } from "solid-js";
import api from "~/functions/api";
import ChatCard from "./chatCard";

export default function ChatList(args: { projectId: number }) {
	const [chats, set_chats] = createSignal<any>([]);
	const [loading, setLoading] = createSignal(true);
	const [error, setError] = createSignal(null);
	onMount(async () => {
		try {
			const data = await api.chats.list({ projectId: args.projectId });
			set_chats(data);
		} catch (err: Error | any) {
			console.error("Error fetching chats:", err);
			setError(err.message || "An error occurred");
		}
		setLoading(false);
	});

	return (
		<div class="my-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Show when={loading()}>
				<p>Loading...</p>
			</Show>
			<Show when={error()}>
				<p>Error: {error()}</p>
			</Show>
			<Show when={!loading() && !error() && chats().length > 0}>
				<For each={chats()}>{(chat) => <ChatCard chat={chat} />}</For>
			</Show>
		</div>
	);
}
