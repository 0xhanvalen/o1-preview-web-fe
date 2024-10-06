import axios from "axios";
import { config } from "~/config";

export async function register(args: { email: string; password: string }) {
	const { email, password } = args;
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/create`,
		{
			email,
			password,
		}
	);
	if (!response.data.error) {
		window.location.href = "/projects";
	}
	return response.data;
}
