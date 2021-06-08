import styled from 'styled-components'
import { corFundoSecundaria } from '../../Colors'

const Conteudo = styled.main
`
    background: ${corFundoSecundaria};
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    min-height: calc(100vh - 17rem - 1px);
    padding: 2rem;
`

export default Conteudo;