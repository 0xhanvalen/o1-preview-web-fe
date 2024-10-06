import axios from "axios";

export async function list() {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_LOCATION}/projects/list`,
			{
				withCredentials: true,
			}
		);
		console.log({ data: response.data });
		if (response.status !== 200) {
			throw new Error("Failed to fetch projects");
		}

		return response.data.results;
	} catch (error) {
		console.error(error);
		return new Error("Failed to fetch projects");
	}
}
