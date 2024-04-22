import { config } from "dotenv";
import pg from "pg";

config();

const pool = new pg.Pool({
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	database: process.env.DATABASE,
	port: parseInt(process.env.DB_PORT!) || 3000,
});

const db = async () => {
	try {
		const client = await pool.connect();

		console.log("Connected to the database");

		return client;
	} catch (error) {
		console.log("Error connecting to the database", error);
	}
};

export { db, pool };
