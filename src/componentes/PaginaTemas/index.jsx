import styled from 'styled-components';
import BotaoTema from 'componentes/BotaoTema';
import { useTema } from 'hooks/useTema';

const PaginaTemas = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    bottom: 0;
    height: 75%;
    width: 100%;
`

const Retorno = () => {
	const temas = [1,1,1,1,1,1]

	const [tema, setTema] = useTema();

	const renderTemas = () => {
		return temas.map((elem) => {
			return (<BotaoTema nomeTema={elem} onClick={setTema(elem)} tema={tema}/>)
		})
	}
    return (
        <PaginaTemas>
			{renderTemas}
        </PaginaTemas>
    )
}

export default Retorno;