import { pool } from "@/config/dbConfig";
import { User } from "../model/user";
import bcryptjs from "bcryptjs";

class UserServices {
	async register(user: User) {
		console.log("entrou servicess");
		const userRegistered = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[user.email]
		);

		if (userRegistered.rows.length > 0) {
			throw new Error("Email already exists");
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(user.password, salt);

		const newUser = new User({
			username: user.username,
			email: user.email,
			password: hashedPassword,
		});

		try {
			console.log("entrou bomba service ");
			const savedUser = await pool.query(
				"insert into users (username, email, password) values ($1, $2, $3)",
				[newUser.username, newUser.email, newUser.password]
			);
			return savedUser;
		} catch (error: any) {
			console.log("error service ", error);
			throw new Error("Error saving user");
		}
	}
}

export const userServices = new UserServices();
