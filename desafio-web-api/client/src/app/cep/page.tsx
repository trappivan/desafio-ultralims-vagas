"use client";

import { Button, Input } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";
import {
	DataGrid,
	GridColDef,
	GridDeleteForeverIcon,
	GridRowProps,
} from "@mui/x-data-grid";

interface Address {
	id?: number;
	cep?: string;
	logradouro?: string;
	complemento?: string;
	bairro?: string;
	localidade?: string;
	uf?: string;
	ibge?: string;
	gia?: string;
	ddd?: string;
	siafi?: string;
}

export default function BuscaCep() {
	const [value, setValue] = useState<string>("");
	const [address, setAddress] = useState<Address[]>([]);

	console.log("asdasd", value);
	async function requestAddres() {
		await axios
			.get(`https://viacep.com.br/ws/${value}/json/`)
			.then((response) => {
				setAddress([...address, { ...response.data, id: address.length + 1 }]);
				localStorage.setItem(
					"address",
					JSON.stringify([
						...address,
						{ ...response.data, id: address.length + 1 },
					])
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
		let local = localStorage.getItem("address");

		if (local !== null) {
			setAddress(JSON.parse(local));
		}
	}, []);
	console.log("address", address);

	function removeItems(row: GridRowProps) {
		let newAddress = address.filter((item) => item.id !== row.id);

		setAddress(newAddress);

		localStorage.setItem("address", JSON.stringify(newAddress));
	}

	const columns: GridColDef[] = [
		{
			field: "cep",
			headerName: "CEP",
			disableColumnMenu: true,
			sortable: false,
		},
		{
			field: "logradouro",
			headerName: "Logradouro",
			disableColumnMenu: true,
			width: 200,
		},
		{
			field: "complemento",
			headerName: "Complemento",
			disableColumnMenu: true,
			sortable: false,
		},
		{ field: "bairro", headerName: "Bairro", disableColumnMenu: true },
		{ field: "localidade", headerName: "Localidade", disableColumnMenu: true },
		{ field: "uf", headerName: "UF", disableColumnMenu: true, sortable: false },
		{
			field: "ibge",
			headerName: "IBGE",
			disableColumnMenu: true,
			sortable: false,
		},
		{
			field: "gia",
			headerName: "GIA",
			disableColumnMenu: true,
			sortable: false,
		},
		{
			field: "ddd",
			headerName: "DDD",
			disableColumnMenu: true,
			sortable: false,
		},
		{
			field: "siafi",
			headerName: "SIAFI",
			disableColumnMenu: true,
			sortable: false,
		},
		{
			field: "Editar",

			width: 100,
			renderCell: (params) => {
				return (
					<Button
						variant="contained"
						color="primary"
						size="small"
						onClick={() => removeItems(params.row)}>
						<GridDeleteForeverIcon />
					</Button>
				);
			},
		},
	];
	return (
		<div className="flex flex-col h-screen w-screen bg-slate-500">
			<div className="flex flex-col justify-start items-center">
				<div className="flex">
					<h1>Buscar e adicionar endereços por CEP</h1>
				</div>
				<div className="flex flex-row space-x-4 ">
					<input
						type="text"
						className="bg-slate-700 rounded-lg text-white p-2 border border-solid border-slate-200 "
						placeholder="Digite o CEP"
						color="primary"
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<button
						className="p-2 rounded-lg border border-solid border-slate-200 text-white "
						onClick={requestAddres}>
						Buscar
					</button>
				</div>
			</div>

			{address && (
				<div className="h-2/3 w-2/3 border-red-600 border border-solid">
					<DataGrid
						columns={columns}
						rows={address}
						checkboxSelection
						rowSelection={true}
						pageSizeOptions={[5]}
						localeText={{
							noRowsLabel: "Nenhum endereço encontrado",
							noResultsOverlayLabel: "Nenhum resultado encontrado",
						}}
					/>
				</div>
			)}
			{/* <button onClick={removeItems}>remove items</button> */}
		</div>
	);
}
