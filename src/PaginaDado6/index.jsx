import Dado6 from '../componentes/dados/Dado6'
import React, { useState } from 'react';
import styled from 'styled-components';
import Historico from '../componentes/Historico'

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
            return (<li><Dado6 tamanho={2} numero={elem}/></li>)
        }).reverse();
    }

    return (
        <PaginaDado6>
            <Historico onClick={() => fazSorteio()}>
                <Dado6 tamanho={3} numero={state.numero}/>
                {renderHistorico()}
            </Historico>
        </PaginaDado6>
    )
}

export default Retorno;