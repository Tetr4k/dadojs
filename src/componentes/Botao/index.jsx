import styled from 'styled-components';
import { corBotaoPrimaria, corTextoPrimaria } from 'Colors';

const Botao = styled.button`
    background: ${corBotaoPrimaria};
    border: none;
    border-radius: 100%;
    box-shadow: 1px 1px 0.4rem 0.1rem black;
    color: ${corTextoPrimaria};
    font-size: 2.5rem;
    text-align: center;
    height: 5rem;
    width: 5rem;

    @media(min-width: 900px){
        border-radius: 2rem;
        height: 5rem;
        width: 90%;

        &:hover{
            background: ${corTextoPrimaria};
            color: ${corBotaoPrimaria};
        }
    }
`

export default Botao;