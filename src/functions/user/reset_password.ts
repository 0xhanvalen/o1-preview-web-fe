import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export const requestResetPassword = async (args: { email: string }) => {
	const response = await axios.post(
		`${SERVER_LOCATION}/user/request_reset_password`,
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
	const response = await axios.post(`${SERVER_LOCATION}/user/reset_password`, {
		password: args.password,
		token: args.token,
	});
	return response.data;
};
