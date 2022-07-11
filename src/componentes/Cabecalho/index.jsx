import styled from 'styled-components';
import Titulo from '../Titulo';
import TrocaBrilho from '../TrocaBrilho'
import { corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Cabecalho = styled.header`
    align-items: center;
    background-color: ${corFundoSecundaria};
    border-bottom: white 1px solid;
    color: ${corTextoPrincipal};
    display: flex;
    flex-direction: row;
    font-family: 'Rubik', sans-serif;
    height: 5rem;
    justify-content: space-between;
    left: 0;
    //padding: 1rem;
    position: fixed;
    top:0;
    width: 100%;
`

const Retorno = () => {
    return (
        <Cabecalho>
            <Titulo/>
        </Cabecalho>
    );
};

export default Retorno;