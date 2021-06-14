import styled from 'styled-components'
import { corFundoSecundaria, corTextoPrincipal} from '../../Colors';

const CaixaTexto = styled.p`
    background: ${corFundoSecundaria};
    border: ${corFundoSecundaria} 1px solid;
    border-radius: 2rem;
    color: ${corTextoPrincipal};
    text-align: center;
    margin-bottom: 0.5rem;
    padding: 1rem;
`

export default CaixaTexto;