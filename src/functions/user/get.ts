import axios from "axios";
import { config } from "~/config";

export async function get() {
	const response = await axios.get(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/get`,
		{
			withCredentials: true,
		}
	);
	return response.data;
}
