import styled from 'styled-components'
import { corFundoPrincipal } from '../../Colors'
import Botao from '../Botao'
const Navegacao = styled.nav
`
    background: ${corFundoPrincipal};
    border-bottom: white 1px solid;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Rubik', sans-serif;
    justify-content: space-around;
    width: 100%;
`

const retorno = () => {
    return (
        <Navegacao>
            <Botao to='/dado6'>D6</Botao>
        </Navegacao>
    );
}

export default retorno;