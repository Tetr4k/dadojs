import styled from 'styled-components';
import Botao from 'componentes/Botao';

const BotaoTrocar = styled(Botao)`
    align-self: ${(props) => props.alinhamento ? 'flex-start' : 'flex-end'};
    content: ${(props) => props.alinhamento ? '←' : '→'};
`

export default BotaoTrocar;