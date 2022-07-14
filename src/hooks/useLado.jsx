import {useState} from 'react';

export const useLado = () => {
	const [lado, setLado] = useState(true);

	const trocaLado = (lado) => {
		console.log("Aaaaaa")
		setLado(!lado)
	};

	return [lado, trocaLado];
}