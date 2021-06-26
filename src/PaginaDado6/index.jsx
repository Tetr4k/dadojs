import Dado6 from '../componentes/dados/Dado6'
import React, { useState } from 'react';
import styled from 'styled-components';
import Historico from '../componentes/Historico'
import { corFundoSecundaria, corTextoPrincipal, corTextoSecundaria } from '../Colors';

const Botao = styled.button`
    background: ${corFundoSecundaria};
    border: solid 1px ${corFundoSecundaria};
    border-radius: 1rem;
    color: ${corTextoPrincipal};
    padding: 0.6rem;
    box-shadow: 1px 1px 0.4rem 0.1rem black;
    &:hover{
        color: ${corTextoSecundaria};
        box-shadow: none;
    }
`

const Acoes = styled.div`
    display: flex;
`

const PaginaDado6 = styled.div`
    margin: auto;
`

const Retorno = () => {

    const [ state, setState] = useState({
        numero: 6,
        historico: []
    });

    const geraNumero = (numero) => {
        const novoValor = Math.floor(Math.random()*6)+1;
        if(novoValor === numero) {
            return geraNumero(numero);
        }
        return novoValor;
    }

    const fazSorteio = () => {
        const novoNumero = geraNumero(state.numero);
        const novoHistorico = state.historico;
        novoHistorico.push(novoNumero);
        const novoState = {
            numero: novoNumero,
            historico: novoHistorico
        }
        setState(novoState);
    }

    const renderHistorico = () => {
        return state.historico.map((elem, indice) => {
            if(indice === state.historico.length-1) return null;
            return (<li key={indice}><Dado6 tamanho={2} numero={elem}/></li>)
        }).reverse();
    }

    const limpaHistorico = () =>{
        const novoState = {
            numero: state.numero,
            historico: []
        }
        setState(novoState);
    }

    return (
        <PaginaDado6 >
            <Acoes>
                <Botao onClick={limpaHistorico}>Limpar Historico</Botao>
            </Acoes>
            <Dado6 onClick={fazSorteio} tamanho={3} numero={state.numero}/>
            <Historico>
                {renderHistorico()}
            </Historico>
        </PaginaDado6>
    )
}

export default Retorno;