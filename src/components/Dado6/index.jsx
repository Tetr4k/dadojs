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

const Bolinha = styled.div`
    background: black;
    border-radius: 1em;
    box-shadow: inset 0 0 10px 1px white;
    grid-row: ${ 
        (props) => {
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
        }
    };
    grid-column: ${ 
        (props) => {
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
        }
    };
    transition: ease-in-out 100ms;
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
            <Bolinha numero='1'/>
            <Bolinha numero='2'/>
            <Bolinha numero='3'/>
            <Bolinha numero='4'/>
            <Bolinha numero='5'/>
            <Bolinha numero='6'/>
            <Bolinha numero='7'/>
        </Dado>
    );
}

export default Dado6;