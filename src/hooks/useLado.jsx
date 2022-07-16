import {useState} from 'react';

export const useLado = () => {
	const alinhamento = JSON.parse(localStorage.getItem('alinhamento'));

	const [lado, setLado] = useState(alinhamento === null ? false : alinhamento);

	const trocaLado = () => {
		localStorage.setItem('alinhamento', JSON.stringify(!lado))
		setLado(!lado)
	}

	return [lado, trocaLado];
}