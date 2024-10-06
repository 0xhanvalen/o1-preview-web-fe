import { useParams } from "@solidjs/router";
import { createResource, Show, For } from "solid-js";
import api from "~/functions/api";
import { Title } from "@solidjs/meta";
import ChatMessage from "./_components/chatMessage";
import ChatInput from "./_components/chatInput";
import { chat, setChat } from "./signals/chat";

export default function Chat() {
	const params = useParams();
	const id = params.id;
	async function fetchChat() {
		const response = await api.chats.get({ chatId: id });
		return response;
	}
	const [chatResource] = createResource(fetchChat);
	setChat(chatResource());

	return (
		<>
			<Title>Chat</Title>
			<main class="text-center mx-auto text-gray-700 p-4 w-fit">
				<h1 class="text-2xl">Mackenzie's AI Playground</h1>
				<Show when={chatResource.loading}>
					<h2 class="text-xl">Loading...</h2>
				</Show>
				<Show when={chat()?.title}>
					<h2 class="text-xl">{chat().title}</h2>
					<Show when={chat()?.chatHistory.length > 0}>
						<ChatInput chatId={id} />
						<div class="flex flex-col-reverse gap-2 w-full">
							<For each={chat().chatHistory}>
								{(chatMessage) => <ChatMessage chatMessage={chatMessage} />}
							</For>
						</div>
					</Show>
				</Show>
			</main>
		</>
	);
}
