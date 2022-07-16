import styled from 'styled-components';
import Botao from 'componentes/Botao';

const BotaoLimpar = styled(Botao)`
	content: '♻';
	
	@media(min-width: 900px){
		content: 'Limpar historico';
	}
`

export default BotaoLimpar;