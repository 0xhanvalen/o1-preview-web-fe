import { useParams } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import Layout from "~/components/Layout";
import api from "~/functions/api";

const [newPassword, setNewPassword] = createSignal("");
const [confirmNewPassword, setConfirmNewPassword] = createSignal("");
const [passwordsMatch, setPasswordsMatch] = createSignal(false);

export default function ResetPassword() {
	const { token } = useParams();
	createEffect(() => {
		if (newPassword() === confirmNewPassword() && newPassword() !== "") {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	});

	const active = (active: boolean) => {
		return active ? "bg-blue-500" : "bg-gray-100";
	};

	const submitChange = () => {
		api.user.resetPassword({ token: token, password: newPassword() });
	};
	return (
		<Layout>
			<h2>Reset Password</h2>
			<p>Enter your new password</p>
			<div class="flex flex-col gap-4">
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
				<button class={`px-8 py-4 ${active(passwordsMatch())}`}>
					Reset Password
				</button>
			</div>
		</Layout>
	);
}
