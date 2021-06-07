import styled from 'styled-components'
import { corFundoPrincipal } from '../../Colors'
import Botao from '../Botao'
const Navegacao = styled.nav
`
    background: ${corFundoPrincipal};
    display: flex;
    justify-content: space-around;
    width: 100vw;
`

const retorno = () => {
    return (
        <Navegacao>
            <Botao to='/dado4'>D4</Botao>
            <Botao to='/dado6'>D6</Botao>
            <Botao to='/dado8'>D8</Botao>
            <Botao to='/dado10'>D10</Botao>
            <Botao to='/dado12'>D12</Botao>
            <Botao to='/dado20'>D20</Botao>
        </Navegacao>
    );
}

export default retorno;