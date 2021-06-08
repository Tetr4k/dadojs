import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { corFundoPrincipal, corFundoSecundaria, corTextoPrincipal } from '../../Colors'

const Botao = styled(Link)
`
    background: ${corFundoPrincipal};
    color: ${corTextoPrincipal};
    height: 1rem;
    padding: 1rem;
    text-decoration: none;
    text-align: center;
    width: 6rem;
    &:hover{
        background: ${corFundoSecundaria};
    }
`

export default Botao;