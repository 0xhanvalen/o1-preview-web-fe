import api from "~/functions/api";

export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-fit">
			<h1 class="text-2xl">Mackenzie's AI Playground</h1>
			<h2 class="text-xl">A basic improvement on ChatGPT's feature set</h2>
			<p>
				This playground gives you a UI for chatting with o1 preview using your
				own API key.
			</p>
			<p>
				Extra features include organizing chats into projects, and reviewing the
				costs of sessions.
			</p>
			<p>Chats are also displayed in reverse order to avoid scrolling.</p>
			<div class="flex flex-col gap-4 mx-auto my-8">
				<a
					class="px-8 py-4 border-2"
					href="/auth/login"
				>
					Log In
				</a>
				<a
					class="px-8 py-4 border-2"
					href="/auth/register"
				>
					Sign Up
				</a>
				<button
					class="px-8 py-4 bg-gray-100"
					onMouseDown={() => api.auth.logout()}
				>
					Logout
				</button>
			</div>
		</main>
	);
}
