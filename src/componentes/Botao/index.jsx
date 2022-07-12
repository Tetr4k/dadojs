import styled from 'styled-components'
import { corFundoSecundaria, corTextoPrincipal, corTextoSecundaria } from '../../Colors';

const Botao = styled.button`
    background: ${corFundoSecundaria};
    border: none;
    border-radius: 100%;
    bottom: 1rem;
    box-shadow: 1px 1px 0.4rem 0.1rem black;
    color: ${corTextoPrincipal};
    font-size: 3rem;
    height: 5rem;
    right: 1rem;
    position: fixed;
    width: 5rem;
    &:hover{
        color: ${corTextoSecundaria};
        box-shadow: none;
    }
`

export default Botao;