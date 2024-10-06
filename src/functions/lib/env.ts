import dotenv from "dotenv";
dotenv.config();

const SERVER_LOCATION = () => {
	const value = process.env.SERVER_LOCATION || "";
	if (value === "") {
		throw new Error("SERVER_LOCATION is not set");
	}
	return value;
};

export { SERVER_LOCATION };
