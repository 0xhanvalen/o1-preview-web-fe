import { createSignal } from "solid-js";
import api from "~/functions/api";
import Layout from "~/components/Layout";

const [email, setEmail] = createSignal("");

export default function ResetPassword() {
	return (
		<Layout>
			<>
				<h2 class="text-xl">Reset Password</h2>
				<p>Enter your email address to reset your password</p>
				<input
					placeholder="email"
					value={email()}
					onInput={(evt) => setEmail(evt.target.value)}
				/>
				<button
					class="px-8 py-4 bg-gray-100"
					onMouseDown={() => api.user.requestResetPassword({ email: email() })}
				>
					Reset Password
				</button>
			</>
		</Layout>
	);
}
