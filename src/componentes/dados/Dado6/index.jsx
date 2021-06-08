import React, { useState } from 'react';
import styled from 'styled-components';
import Circulo from '../Circulo';
import { corDadoPadrao } from '../../../Colors'

const tamanho = (props) => props.tamanho;

const Dado = styled.div
`
    background: ${corDadoPadrao};
    border: ${corDadoPadrao} 1px solid;
    border-radius: ${tamanho}em;
    display: grid;
    gap: 1em;
    grid-template-columns: ${tamanho}em ${tamanho}em ${tamanho}em;
    grid-template-rows: ${tamanho}em ${tamanho}em ${tamanho}em;
    height: calc(3 * ${tamanho}em + 2em);
    padding: ${tamanho}em;
    width: calc(3 * ${tamanho}em + 2em);
`

const Dado6 = () => {
    const [ numero, setNumero ] = useState(6);
    
    const gera = () => {
        const novoValor = Math.floor(Math.random()*6)+1;
        if(novoValor === numero) {
            gera();
            return;
        }
        setNumero(novoValor);
    }

    const fazSorteio = () => {
        let cont = 0;
        const intervalo = setInterval(()=>{
            cont++;
            gera();
            if (cont === 5) clearInterval(intervalo);
        }, 300);
    }

    let circulos = [];
    for(let x=1; x<=7; x++){
        circulos.push(<Circulo posicao={x} key={x} numero={numero}/>);
    }
    
    return (
        <Dado tamanho={4} onClick={() => fazSorteio()}>
            {circulos}
        </Dado>
    );
}

export default Dado6;