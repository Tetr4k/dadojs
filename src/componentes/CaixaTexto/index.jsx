import styled from 'styled-components'
import { corFundoSecundaria, corTextoPrincipal, corTextoSecundaria} from '../../Colors';

const CaixaTexto = styled.p`
    background: ${corFundoSecundaria};
    border: ${corFundoSecundaria} 1px solid;
    border-radius: 2rem;
    box-shadow: 0 0.3rem 1rem 0 black;
    color: ${corTextoPrincipal};
    line-height: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    & a{
        text-decoration: none;
        color: ${corTextoPrincipal};
    }
    & a:hover{
        color: ${corTextoSecundaria};
    }
`

export default CaixaTexto;