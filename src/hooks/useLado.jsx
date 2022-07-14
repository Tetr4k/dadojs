import {useState} from 'react';

export const useLado = (alinhamento) => {
	const [lado, setLado] = useState(alinhamento);

	const trocaLado = () => setLado(!lado)

	return [lado, trocaLado];
}