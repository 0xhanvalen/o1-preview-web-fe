import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function register(args: { email: string; password: string }) {
	const { email, password } = args;
	const response = await axios.post(`${SERVER_LOCATION()}/user/create`, {
		email,
		password,
	});
	return response.data;
}
