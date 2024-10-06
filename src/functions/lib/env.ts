import dotenv from "dotenv";
dotenv.config();

const GET_SERVER_LOCATION = () => {
	const value = process.env.SERVER_LOCATION || "";
	if (value === "") {
		throw new Error("SERVER_LOCATION is not set");
	}
	console.log({ value });
	return value;
};

const SERVER_LOCATION = GET_SERVER_LOCATION();

export { SERVER_LOCATION };
