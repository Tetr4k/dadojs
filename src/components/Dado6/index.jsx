import React, { useState } from 'react';
import styled from 'styled-components';

const Dado = styled.div`
    background: white;
    border: black 1em solid;
    border-radius: 5em;
    display: grid;
    gap: 1em;
    grid-template-columns: 1em 1em 1em;
    grid-template-rows: 1em 1em 1em;
    height: 20em;
    margin: 1em;
    padding: 30px;
    width: 20em;
`

const P = styled.div`
    background: black;
    box-shadow: inset 0 0 10px 1px white;
    transition: ease-in-out 100ms;
`

const P1 = styled(P)`
    grid-row: 1 / 1;
    grid-column: 1 / 1;
`
const P2 = styled(P)`
    grid-row: 1 / 1;
    grid-column: 3 / 3;
`
const P3 = styled(P)`
    grid-row: 2 / 2;
    grid-column: 1 / 1;
`
const P4 = styled(P)`
    grid-row: 2 / 2;
    grid-column: 2 / 2;
`
const P5 = styled(P)`
    grid-row: 2 / 2;
    grid-column: 3 / 3;
`
const P6 = styled(P)`
    grid-row: 3 / 3;
    grid-column: 1 / 1;
`
const P7 = styled(P)`
    grid-row: 3 / 3;
    grid-column: 3 / 3;
`

const Dado6 = () => {
    const [ state, setState ] = useState(6);
    
    function gera(){
        const novoValor = Math.floor(Math.random()*6)+1;
        if(novoValor === state) {
            gera();
            return;
        }
        setState(novoValor);
    }

    function sorteia(){
        let conta = 0;
        const intervalo = setInterval(()=>{
            conta++;
            gera();
            if (conta === 5) clearInterval(intervalo);
        }, 300);
    }

    return (
        <Dado onClick={() => sorteia()}>
            {state}
            <P1/>
            <P2/>
            <P3/>
            <P4/>
            <P5/>
            <P6/>
            <P7/>
        </Dado>
    );
}

export default Dado6;