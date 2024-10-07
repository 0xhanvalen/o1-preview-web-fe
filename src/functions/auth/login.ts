import axios from "axios";
import { config } from "~/config";

export async function login(args: { email: string; password: string }) {
	const { email, password } = args;
	const response = await axios.post(
		`${config.SERVER_LOCATION}/user/login`,
		{
			email,
			password,
		},
		{
			withCredentials: true,
		}
	);
	console.log({ data: response.data });
	if (response.status === 200) {
		window.location.href = "/projects";
	}
	return response.data;
}
