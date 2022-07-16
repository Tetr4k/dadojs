import {useState} from 'react';

export const useLado = () => {
	//onst  = JSON.parse(localStorage.getItem('tema'));

	const [tema, setTema] = useState();

	return [tema, setTema];
}