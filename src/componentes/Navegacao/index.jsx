import styled from 'styled-components'
import { corFundoSecundaria } from '../../Colors'
import Botao from '../Botao'

const Navegacao = styled.nav`
    background: ${corFundoSecundaria};
    display: flex;
    flex-wrap: wrap;
    font-family: 'Rubik', sans-serif;
    justify-content: space-around;
    margin-top: 5rem;
    width: 100%;
`

const Retorno = () => {
    return (
        <Navegacao>
            <Botao to='/dadojs/dado6'>D6</Botao>
        </Navegacao>
    );
}

export default Retorno;