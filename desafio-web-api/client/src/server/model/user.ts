import bcryptjs from "bcryptjs";

type user = {
	username: string;
	email: string;
	password: string;
};

export class User {
	username: string;
	email: string;
	password: string;

	constructor({ username, email, password }: user) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	async matchPassword(password: string, hashedPassword: string) {
		return await bcryptjs.compare(password, hashedPassword);
	}
}
