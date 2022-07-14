import Botao from '../Botao'
import styled from 'styled-components';

const BotaoTroca = styled(Botao)`
    &:after{
        content: "";
    }
`

export default BotaoTroca;