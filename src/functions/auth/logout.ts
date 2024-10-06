import axios from "axios";
import { config } from "~/config";

export function logout() {
	return axios.get(`${import.meta.env.VITE_SERVER_LOCATION}/user/logout`, {
		withCredentials: true,
	});
}
