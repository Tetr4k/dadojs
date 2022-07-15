import styled from 'styled-components';
import Titulo from '../Titulo';
import Link from '../Link';
import {corFundoSecundaria, corTextoPrimaria} from '../../Colors'

const Cabecalho = styled.header`
    background-color: ${corFundoSecundaria};
    border-bottom: white 2px dashed;
    color: ${corTextoPrimaria};
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    height: 10%;
    justify-content: space-between;
    left: 0;
    padding: 0.5rem;
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