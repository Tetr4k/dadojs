import {useState, useEffect} from 'react';

export const useNumero = (numeroInicial) => {
	const [numero, setNumero] = useState(numeroInicial);

	useEffect(() => {
		setNumero(numeroInicial);
	}, [numeroInicial]);

	return [numero, setNumero];
}