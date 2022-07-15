import styled from 'styled-components'
import { corBotaoPrimaria, corBotaoSecundaria, corTextoPrimaria } from '../../Colors';

const Botao = styled.button`
    background: ${corBotaoPrimaria};
    border: none;
    border-radius: 100%;
    box-shadow: 1px 1px 0.4rem 0.1rem black;
    color: ${corTextoPrimaria};
    font-size: 3rem;
    height: 5rem;
    width: 5rem;
    &:hover{
        background: ${corBotaoSecundaria};
        box-shadow: none;
    }
`

export default Botao;