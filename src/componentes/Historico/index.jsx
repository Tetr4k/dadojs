import styled from 'styled-components';
import Dado6 from '../dados/Dado6';
import {corFundoPrincipal} from '../../Colors';

const Historico = styled.ol`
    display: flex;
    overflow: scroll;
    width: 100%;
`

    position: fixed;
    right: 0;
`


const renderHistorico = (conteudo) => {
    return conteudo.map((elem, indice) => {
        if(indice === conteudo.length-1) return null;
        return (<li key={indice}><Dado6 tamanho={1} numero={elem}/></li>)
    }).reverse();
}

}
export default Retorno;