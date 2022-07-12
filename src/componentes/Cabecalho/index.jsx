import styled from 'styled-components';
import Titulo from '../Titulo';
import Link from '../Link';
import { corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Cabecalho = styled.header`
    background-color: ${corFundoSecundaria};
    border-bottom: white 2px dashed;
    color: ${corTextoPrincipal};
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    justify-content: space-between;
    padding: 0.5rem;
    left: 0;
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