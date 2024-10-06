import axios from "axios";
import { config } from "~/config";

export const requestResetPassword = async (args: { email: string }) => {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/request_reset_password`,
		{
			email: args.email,
		}
	);
	return response.data;
};

export const resetPassword = async (args: {
	password: string;
	token: string;
}) => {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/user/reset_password`,
		{
			password: args.password,
			token: args.token,
		}
	);
	return response.data;
};
