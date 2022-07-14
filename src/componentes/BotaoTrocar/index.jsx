import Botao from '../Botao'
import styled from 'styled-components';

const BotaoTrocar = styled(Botao)`
    &:after{
        content: "";
    }
`

export default BotaoTrocar;