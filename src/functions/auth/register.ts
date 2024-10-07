import axios from "axios";
import { useAPI } from "../useAPI";

export async function register(args: { email: string; password: string }) {
	const { email, password } = args;
	const response = await useAPI({
		url: "/auth/register",
		method: "POST",
		data: {
			email,
			password,
		},
	});
	if (response.status === 200) {
		const { httpToken, wsToken } = response.data.result;
		localStorage.setItem("httpToken", httpToken);
		localStorage.setItem("wsToken", wsToken);
		window.location.href = "/projects";
	}
}
