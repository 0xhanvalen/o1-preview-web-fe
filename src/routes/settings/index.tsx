import {
	createSignal,
	createResource,
	Switch,
	Match,
	Show,
	For,
} from "solid-js";
import api from "~/functions/api";
import { Title } from "@solidjs/meta";
import Layout from "~/components/Layout";

const [newPassword, setNewPassword] = createSignal("");
const [confirmNewPassword, setConfirmNewPassword] = createSignal("");
const [openAIKey, setOpenAIKey] = createSignal("");

export default function Projects() {
	return (
		<>
			<Title>Projects Overview</Title>
			<Layout>
				<h2 class="text-xl">Settings</h2>
				<div class="my-8 mx-auto flex flex-col gap-4">
					<h3 class="text-xl">Edit Settings</h3>
					<p>Change password</p>
					<input
						placeholder="new password"
						value={newPassword()}
						onInput={(evt) => setNewPassword(evt.target.value)}
					/>
					<input
						placeholder="confirm new password"
						value={confirmNewPassword()}
						onInput={(evt) => setConfirmNewPassword(evt.target.value)}
					/>
					<button
						class="px-8 py-4 bg-gray-100"
						onMouseDown={() =>
							api.user.updatePassword({ password: newPassword() })
						}
					>
						Update
					</button>
					<p>OpenAI API Key</p>
					<input
						placeholder="openai api key"
						value={openAIKey()}
						onInput={(evt) => setOpenAIKey(evt.target.value)}
					/>
					<button
						class="px-8 py-4 bg-gray-100"
						onMouseDown={() => api.user.updateAPIKey({ apiKey: openAIKey() })}
					>
						Update
					</button>
				</div>
			</Layout>
		</>
	);
}
