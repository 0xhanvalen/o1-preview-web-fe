import { useParams } from "@solidjs/router";
import { For, Show, createResource, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";
import api from "~/functions/api";
import ChatCard from "../_components/chatCard";

const [newChatName, setNewChatName] = createSignal("");
const [newChatMessage, setNewChatMessage] = createSignal("");

export default function ProjectSingle() {
	const params = useParams();
	const id = (params.id as any as number) * 1;
	const fetchChat = async () => {
		const response = await api.chats.list({
			projectId: id,
		});
		return response;
	};
	const [projects] = createResource(fetchChat);
	return (
		<>
			<Title>Project</Title>
			<main class="text-center mx-auto text-gray-700 p-4 w-fit">
				<h1 class="text-2xl">Mackenzie's AI Playground</h1>
				<h2 class="text-xl">Chats</h2>
				<div class="my-8 mx-auto flex flex-col gap-4">
					<h3 class="text-xl">Create Chat</h3>
					<input
						placeholder="new chat name"
						value={newChatName()}
						onInput={(evt) => setNewChatName(evt.target.value)}
					/>
					<textarea
						placeholder="Your message"
						value={newChatMessage()}
						onInput={(evt) => setNewChatMessage(evt.target.value)}
					/>
					<button
						class="px-8 py-4 bg-gray-100"
						onMouseDown={async () => {
							await api.chats.create({
								title: newChatName(),
								message: newChatMessage(),
								projectId: id,
							});
							window.location.reload();
						}}
					>
						Create
					</button>
				</div>
				<Show when={projects()?.length > 0}>
					<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<For each={projects()}>{(item) => <ChatCard chat={item} />}</For>
					</div>
				</Show>
			</main>
		</>
	);
}
