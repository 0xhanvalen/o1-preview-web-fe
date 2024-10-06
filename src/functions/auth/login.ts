import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function login(args: { email: string; password: string }) {
	const { email, password } = args;
	const response = await axios.post(
		`${SERVER_LOCATION()}/user/login`,
		{
			email,
			password,
		},
		{
			withCredentials: true,
		}
	);
	return response.data;
}
