import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { corFundoPrincipal, corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Botao = styled(Link)
`
    background: ${corFundoPrincipal};
    color: ${corTextoPrincipal};
    height: 1em;
    padding: 1em;
    text-decoration: none;
    text-align: center;
    width: 6em;
    &:hover{
        background: ${corFundoSecundaria};
    }
`

export default Botao;