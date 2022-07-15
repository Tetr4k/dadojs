import Botao from '../Botao'
import styled from 'styled-components';

const BotaoTrocar = styled(Botao)`
    align-self: ${(props) => props.alinhamento ? 'flex-start' : 'flex-end'};
    content: ${(props) => props.alinhamento ? '←' : '→'};
`

export default BotaoTrocar;