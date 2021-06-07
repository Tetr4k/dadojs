import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { corFundoPrincipal, corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Botao = styled(Link)
`
    background: ${corFundoPrincipal};
    color: ${corTextoPrincipal};
    padding: 1em;
    text-decoration: none;
    text-align: center;
    width: 10em;

    &:hover{
        background: ${corFundoSecundaria};
    }
`

export default Botao;