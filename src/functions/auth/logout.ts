import axios from "axios";
import { config } from "~/config";

export async function logout() {
	const response = await axios.get(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/logout`,
		{
			withCredentials: true,
		}
	);
	console.log({ data: response.data });
}
