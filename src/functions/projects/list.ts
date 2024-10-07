import { useAPI } from "../useAPI";

export async function list() {
	try {
		const response = await useAPI({
			url: "/projects/list",
			method: "GET",
		});
		if (response.results) {
			return response.results;
		} else {
			throw new Error("Failed to fetch projects");
		}
	} catch (error) {
		console.error(error);
		return new Error("Failed to fetch projects");
	}
}
