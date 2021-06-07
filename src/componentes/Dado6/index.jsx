import React, { useState } from 'react';
import styled from 'styled-components';

const Dado = styled.div`
    background: white;
    border: black 1px solid;
    border-radius: 2em;
    display: grid;
    gap: 1em;
    grid-template-columns: 1em 1em 1em;
    grid-template-rows: 1em 1em 1em;
    height: 5em;
    margin: 1em;
    padding: 1em;
    width: 5em;
`

const Bolinha = styled.div`
    background: black;
    border-radius: 1em;
    grid-row: ${ (props) => {
        switch(props.numero){
            case '1':
            case '2': return '1 / 1';
            case '3':
            case '4':
            case '5': return '2 / 2';
            case '6':
            case '7': return '3 / 3';
            default: return;
        }
    }};
    grid-column: ${ (props) => {
        switch(props.numero){
            case '1':
            case '3':
            case '6': return '1 / 1';
            case '2':
            case '5':
            case '7': return '3 / 3';
            case '4': return '2 / 2';
            default: return;
        }
    }};
    transition: ease-in-out 100ms;
`

const Dado6 = () => {
    const [ state, setState ] = useState(6);
    
    const gera = () => {
        const novoValor = Math.floor(Math.random()*6)+1;
        if(novoValor === state) {
            gera();
            return;
        }
        setState(novoValor);
    }

    const sorteia = () => {
        let cont = 0;
        const intervalo = setInterval(()=>{
            cont++;
            gera();
            if (cont === 5) clearInterval(intervalo);
        }, 300);
    }

    let bolinhas = [];
    for(let x=1; x<=7; x++){
        bolinhas.push(<Bolinha numero={x.toString()}/>);
    }

    return (
        <Dado onClick={() => sorteia()}>
            {bolinhas}
        </Dado>
    );
}

export default Dado6;