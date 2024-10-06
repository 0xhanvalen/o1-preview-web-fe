import { createSignal } from "solid-js";
import api from "~/functions/api";

const [email, setEmail] = createSignal("");
const [password, setPassword] = createSignal("");
const [confirmedPass, setConfirmedPass] = createSignal("");
const [show, setShow] = createSignal(false);

export default function Register() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-fit">
			<h1 class="text-2xl">Mackenzie's AI Playground</h1>
			<h2 class="text-xl">Register</h2>

			<div class="my-8 mx-auto flex flex-col gap-4">
				<input
					placeholder="email"
					value={email()}
					onChange={(evt) => setEmail(evt.target.value)}
				/>
				<input
					type={show() ? "text" : "password"}
					placeholder="password"
					value={password()}
					onChange={(evt) => setPassword(evt.target.value)}
				/>
				<input
					type={show() ? "text" : "password"}
					placeholder="confirm password"
					value={confirmedPass()}
					onChange={(evt) => setConfirmedPass(evt.target.value)}
				/>
				<button onClick={() => setShow((v) => !v)}>
					{show() ? "Hide Passwords" : "Show Passwords"}
				</button>
				<button
					class="px-8 py-4 bg-gray-100"
					onMouseDown={() =>
						api.auth.register({ email: email(), password: password() })
					}
				>
					Register
				</button>
			</div>
		</main>
	);
}
