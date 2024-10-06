import { createSignal } from "solid-js";
import api from "~/functions/api";
import { isSendingMessage, setIsSendingMessage } from "../signals/chat";

const [newMessage, setNewMessage] = createSignal("");

export default function ChatInput(props: { chatId: string }) {
	async function updateChat() {
		if (newMessage() === "") return;
		setIsSendingMessage(true);
		await api.chats.update({ chatId: props.chatId, message: newMessage() });
		setIsSendingMessage(false);
		setNewMessage("");
	}
	return (
		<div
			class="flex flex-row justify-between mt-4 gap-4"
			style={{ position: "sticky", top: "48px" }}
		>
			{isSendingMessage() && <p>Sending...</p>}
			{!isSendingMessage() && (
				<>
					<textarea
						class="w-full p-2 border-2 border-gray-300 rounded-lg"
						value={newMessage()}
						onInput={(event) => setNewMessage(event.currentTarget.value)}
					/>
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onMouseDown={() => updateChat()}
					>
						Send
					</button>
				</>
			)}
		</div>
	);
}
