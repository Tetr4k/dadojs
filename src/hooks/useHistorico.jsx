import {useState} from 'react';

export const useHistorico = () => {
	const [historico, setHistorico] = useState([]);

	return [historico, setHistorico];
}