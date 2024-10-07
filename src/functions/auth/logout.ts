import axios from "axios";
import { useAPI } from "../useAPI";

export async function logout() {
	const response = await useAPI({
		url: "/auth/logout",
		method: "POST",
	});
	localStorage.removeItem("httpToken");
	localStorage.removeItem("wsToken");
	console.log({ data: response.data });
	window.location.href = "/";
}
