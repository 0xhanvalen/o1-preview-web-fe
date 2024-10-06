import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { ChatCardProps } from "~/routes/chat/types/chat_types";

const INPUT_TOKEN_COST = 0.000015;
const OUTPUT_TOKEN_COST = 0.00006;

const ChatCard: Component<ChatCardProps> = (props) => {
	const { chat } = props;
	const totalCost = () => {
		return (
			chat.totalInputTokens * INPUT_TOKEN_COST +
			chat.totalOutputTokens * OUTPUT_TOKEN_COST
		).toFixed(2);
	};
	return (
		<div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
			<div class="px-6 py-4">
				<h2 class="font-bold text-xl mb-2">{chat.title}</h2>
				<div class="mt-4 text-left">
					<h3 class="font-semibold text-lg">Token Statistics</h3>
					<p class="text-gray-700">
						Total cost: <span class="font-semibold">${totalCost()}</span>
					</p>
					<ul class="list-disc list-inside text-gray-700">
						<li>
							<span class="font-semibold">Total Input Tokens:</span>{" "}
							{chat.totalInputTokens}
						</li>
						<li>
							<span class="font-semibold">Total Output Tokens:</span>{" "}
							{chat.totalOutputTokens}
						</li>
						<li>
							<span class="font-semibold">Total Reasoning Tokens:</span>{" "}
							{chat.totalReasoningTokens}
						</li>
					</ul>
				</div>
				<div class="flex flex-row justify-between mt-4">
					<A href={`/chat/${chat.id}`}>
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Chat
						</button>
					</A>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatCard;
