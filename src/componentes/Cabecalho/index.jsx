import styled from 'styled-components';
import Titulo from '../Titulo';
import Link from '../Link';
import { corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Cabecalho = styled.header`
    background-color: ${corFundoSecundaria};
    border-bottom: white 1px solid;
    color: ${corTextoPrincipal};
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    height: 3.5rem;
    justify-content: space-between;
    left: 0;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
`

const Retorno = () => {
    return (
        <Cabecalho>
            <Titulo/>
            <Link/>
        </Cabecalho>
    );
};

export default Retorno;