import Botao from '../Botao'
import styled from 'styled-components';

const BotaoLimpar = styled(Botao)`
    &:after{
        content: "♻";
    }
`

export default BotaoLimpar;