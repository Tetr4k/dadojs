import styled from 'styled-components'
import { corFundoPrincipal, corTextoPrincipal} from '../../Colors';

const CaixaTexto = styled.p
`
    background: ${corFundoPrincipal};
    border: ${corFundoPrincipal} 1px solid;
    border-radius: 2rem;
    color: ${corTextoPrincipal};
    margin-bottom: 1rem;
    padding: 2rem;
`

export default CaixaTexto;