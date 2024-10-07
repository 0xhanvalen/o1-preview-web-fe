import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";
const ChatHistory = clientOnly(() => import("./_components/chatHistory"));

export default function Chat() {
	const params = useParams();
	const id = params.id;

	return (
		<>
			<Title>Chat</Title>
			<main class="text-center mx-auto text-gray-700 p-4 w-fit">
				<h1 class="text-2xl">Mackenzie's AI Playground</h1>
				<ChatHistory chatId={id} />
			</main>
		</>
	);
}
