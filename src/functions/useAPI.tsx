import axios from "axios";

export const useAPI = async (args: {
	url: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	data?: any;
}) => {
	const httpToken = localStorage.getItem("httpToken");
	const { url, method, data } = args;
	try {
		const response = await axios({
			method,
			url: `${import.meta.env.VITE_SERVER_LOCATION}${url}`,
			data,
			headers: {
				Authorization: `Bearer ${httpToken}`,
			},
		});
		console.log({ response });
		if (response.status !== 200) {
			throw new Error("Failed to fetch projects");
		}

		return response.data;
	} catch (error) {
		console.error(error);
		return new Error("Failed to fetch projects");
	}
};
