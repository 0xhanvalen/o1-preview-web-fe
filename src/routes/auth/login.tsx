import { createSignal } from "solid-js";
import api from "~/functions/api";
import { A } from "@solidjs/router";

const [email, setEmail] = createSignal("");
const [password, setPassword] = createSignal("");
const [show, setShow] = createSignal(false);

export default function LogIn() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-fit">
			<h1 class="text-2xl">Mackenzie's AI Playground</h1>
			<h2 class="text-xl">Log In</h2>

			<div class="my-8 mx-auto flex flex-col gap-4">
				<input
					placeholder="email"
					value={email()}
					onInput={(evt) => setEmail(evt.target.value)}
				/>
				<div class="flex gap-2">
					<input
						type={show() ? "text" : "password"}
						placeholder="password"
						value={password()}
						onInput={(evt) => setPassword(evt.target.value)}
					/>
					<button onClick={() => setShow((v) => !v)}>
						{show() ? "Hide" : "Show"}
					</button>
				</div>
				<button
					class="px-8 py-4 bg-gray-100"
					onMouseDown={() =>
						api.auth.login({ email: email(), password: password() })
					}
				>
					Log In
				</button>
				<A href="/auth/reset_password">Forgot Password?</A>
			</div>
		</main>
	);
}
