import { useParams } from "@solidjs/router";
import { For, Show, createResource, createSignal } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { Title } from "@solidjs/meta";
import api from "~/functions/api";
const ChatList = clientOnly(() => import("../_components/chatList"));

const [newChatName, setNewChatName] = createSignal("");
const [newChatMessage, setNewChatMessage] = createSignal("");

export default function ProjectSingle() {
	const params = useParams();
	const id = (params.id as any as number) * 1;
	const handleNameChange = (evt: any) => {
		console.log(evt.target.value);
		setNewChatName(evt.target.value);
	};
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
						onInput={(evt) => {
							handleNameChange(evt);
						}}
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
				<ChatList projectId={id} />
			</main>
		</>
	);
}
