"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	async function submitForm(event: React.FormEvent) {
		event.preventDefault();
		console.log("Formulário enviado");
		try {
			await axios.post("/api/users/login", user).then((res) => {
				console.log(res);
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className=" bg-slate-800 h-screen w-full">
			<div className="flex flex-col items-center justify-center h-full border-solid border border-green-600">
				<div className="flex flex-col items-center border w-fit">
					<h1 className="text-4xl text-white">Login</h1>
					<form
						onSubmit={submitForm}
						className="flex flex-col items-center justify-center">
						<input
							type="email"
							placeholder="Email"
							className="bg-slate-700 text-white p-2 rounded-lg border border-solid border-slate-200"
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
						<input
							type="password"
							placeholder="Senha"
							className="bg-slate-700 text-white p-2  rounded-lg border border-solid border-slate-200"
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
						<button
							type="submit"
							className="bg-slate-700 text-white p-2 m-2 rounded-lg border border-solid border-slate-200">
							Entrar
						</button>
					</form>
					<div className="flex justify-between w-full border border-solid border-red-800 ">
						<p className="text-white">Não possui conta? </p>{" "}
						<Link className=" text-blue-500 " href="/registrar">
							Registre-se
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
