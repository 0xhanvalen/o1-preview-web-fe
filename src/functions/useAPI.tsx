import axios from "axios";

export const useAPI = async (args: {
	url: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	data?: any;
}) => {
	if (typeof window === "undefined") {
		throw new Error("useAPI can only be used on the client-side");
	}
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
		if (response.status !== 200) {
			throw new Error("Failed to fetch");
		}

		return response.data;
	} catch (error) {
		console.error(error);
		return new Error("Failed to fetch");
	}
};
