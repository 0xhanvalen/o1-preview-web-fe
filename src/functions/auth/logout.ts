import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export function logout() {
	return axios.get(`${SERVER_LOCATION}/user/logout`, {
		withCredentials: true,
	});
}
