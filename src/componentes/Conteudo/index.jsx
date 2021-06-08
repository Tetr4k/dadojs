import styled from 'styled-components'
import { corFundoSecundaria } from '../../Colors'

const Conteudo = styled.main
`
    background: ${corFundoSecundaria};
    height: calc(100vh - 17*16px - 1px);
    padding: 2em;
`

export default Conteudo;