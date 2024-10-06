import axios from "axios";
import { config } from "~/config";

export const updatePassword = async (args: { password: string }) => {
	const { password } = args;
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/update`,
		{
			password,
		},
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const updateAPIKey = async (args: { apiKey: string }) => {
	const { apiKey } = args;
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/update`,
		{
			apiKey,
		},
		{
			withCredentials: true,
		}
	);
	return response.data;
};
