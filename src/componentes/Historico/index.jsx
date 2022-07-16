import styled from 'styled-components';
import Dado6 from 'componentes/dados/Dado6';
import { corFundoPrincipal } from 'Colors';

const Historico = styled.ol`
    display: flex;
    overflow: scroll;
    width: 100%;

    @media(min-width: 900px){
		width: 30%;
		postion: fixed;
		right: 0;
	}
`

const Gradiente = styled.div`
    margin-top: 1rem;
    height: 7rem;
    position: fixed;	
    
    @media(min-width: 900px){
		display: none;
	}
`

const GradienteEsquerdo = styled(Gradiente)`
    box-shadow: 0 0 1rem 1rem ${corFundoPrincipal};
    left: 0;
`

const GradienteDireito = styled(Gradiente)`
    box-shadow: 0 0 1rem 1rem ${corFundoPrincipal};
    right: 0;
`

const renderHistorico = (conteudo) => {
    return conteudo.map((elem, indice) => {
        if(indice === conteudo.length) return null;
        return (<li key={indice}><Dado6 tamanho={1} numero={elem}/></li>)
    }).reverse();
}

const Retorno = (props) => {
    return (
        <Historico>
            {renderHistorico(props.conteudo)}
            <GradienteEsquerdo/>
            <GradienteDireito/>
        </Historico>
    )
}
export default Retorno;