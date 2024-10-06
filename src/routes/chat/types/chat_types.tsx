export type ChatMessage = {
	role: "user" | "assistant";
	content: string;
};

export type Chat = {
	id: string;
	authorId: number;
	projectId: number;
	title: string;
	chatHistory: ChatMessage[];
	totalInputTokens: number;
	totalOutputTokens: number;
	totalReasoningTokens: number;
};

export interface ChatCardProps {
	chat: Chat;
}
