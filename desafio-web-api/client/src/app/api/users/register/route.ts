import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { User } from "@/server/model/user";
import { userServices } from "@/server/services/user.services";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { username, email, password, confirmPassword } = body;

	if (password !== confirmPassword) {
		return NextResponse.json(
			{ error: "Passwords do not match" },
			{ status: 400 }
		);
	}
	try {
		const user = new User({ username, email, password });

		const newUser = await userServices.register(user);

		return NextResponse.json({
			newUser: newUser.rows[0],
			status: 201,
			message: "User created successfully",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: error, campo: "caiu no route.ts" },
			{ status: 500 }
		);
	}
}
