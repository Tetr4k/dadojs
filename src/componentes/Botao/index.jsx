import styled from 'styled-components'
import { corFundoSecundaria, corTextoPrincipal, corTextoSecundaria } from '../../Colors';

const Botao = styled.button`
    background: ${corFundoSecundaria};
    border: solid 1px ${corFundoSecundaria};
    border-radius: 1rem;
    color: ${corTextoPrincipal};
    padding: 0.6rem;
    box-shadow: 1px 1px 0.4rem 0.1rem black;
    &:hover{
        color: ${corTextoSecundaria};
        box-shadow: none;
    }
`

export default Botao;