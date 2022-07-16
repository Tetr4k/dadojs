import styled from 'styled-components';
import Botao from 'componentes/Botao';

const BotaoTema = styled(Botao)`
	background: ${(props) => props.tema.background};
	color: ${(props) => props.color};
	content: ${(props) => props.nomeTema};
	width: 80%;
`

export default BotaoTema;