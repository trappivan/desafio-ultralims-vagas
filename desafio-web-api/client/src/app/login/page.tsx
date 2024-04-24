"use client";

import Sucess from "@/components/Snackbar/sucess";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SucessSnackbar from "@/components/Snackbar/sucess";
import ErrorSnackbar from "@/components/Snackbar/error";
import { set } from "react-hook-form";
import { cookies } from "next/headers";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const [openSucessSnackbar, setOpenSucessSnackbar] = useState(false);
	const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

	const router = useRouter();

	async function submitForm(event: React.FormEvent) {
		event.preventDefault();

		try {
			const res = await axios.post(
				"http://localhost:4000/api/users/login",
				user,
				{
					withCredentials: true,
				}
			);
			console.log("aaaa");
			console.log(res);

			setOpenSucessSnackbar(true);

			router.push("/cep");

			setOpenSucessSnackbar(false);
		} catch (error) {
			console.log(error);
			setOpenErrorSnackbar(true);
		}
	}

	return (
		<div className=" bg-slate-800 h-screen w-full">
			<SucessSnackbar
				open={openSucessSnackbar}
				setOpen={setOpenSucessSnackbar}
			/>

			<ErrorSnackbar open={openErrorSnackbar} setOpen={setOpenErrorSnackbar} />
			<div className="flex flex-col items-center justify-center h-full">
				<div className="flex flex-col items-center w-fit space-y-4">
					<h1 className="text-4xl text-white">Login</h1>

					<form
						onSubmit={submitForm}
						className="flex flex-col items-center justify-center space-y-2">
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
							className="bg-slate-700 text-white p-2  rounded-lg border border-solid border-slate-200">
							Entrar
						</button>
					</form>

					<div className="flex justify-between w-full  ">
						<p className="text-white">Não possui conta? </p>{" "}
						<button onClick={() => router.push("/registrar")}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
