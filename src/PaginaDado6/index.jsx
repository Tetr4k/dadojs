import Dado6 from '../componentes/dados/Dado6'
import React, { useState } from 'react';
import styled from 'styled-components';
import Historico from '../componentes/Historico'
import BotaoLimpar from '../componentes/BotaoLimpar'

const Acoes = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
`

const PaginaDado6 = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    bottom: 0;
    height: 85%;
    width: 100%;
`

const Retorno = () => {

    const [state, setState] = useState({
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

    const limpaHistorico = () =>{
        const novoState = {
            numero: state.numero,
            historico: []
        }
        setState(novoState);
    }

    return (
        <PaginaDado6 >
            <Dado6 onClick={fazSorteio} tamanho={3} numero={state.numero}/>
            <Acoes>
                <BotaoLimpar onClick={limpaHistorico}/>
            </Acoes>
            <Historico conteudo={state.historico}/>
        </PaginaDado6>
    )
}

export default Retorno;