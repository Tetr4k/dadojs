import React from 'react';
import styled from 'styled-components';
import Circulo from 'componentes/dados/Circulo';
import { corDadoPadrao } from 'Colors';

const Dado = styled.div`
    background: ${corDadoPadrao};
    border: none;
    border-radius: 25%;
    box-shadow: 0 0 2rem black inset, 1rem 1rem 0.5rem -0.5rem black;
    display: grid;
    gap: 1rem;
    grid-template-columns: ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem;
    grid-template-rows: ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem;
    height: calc(3 * ${(props) => props.tamanho}rem + 2rem);
    margin: 1rem;
    padding: ${(props) => props.tamanho}rem;
    width: calc(3 * ${(props) => props.tamanho}rem + 2rem);
`

const Retorno = (props) => {

    const circulos = [1, 2, 3, 4, 5, 6, 7];

    const renderCirculos = () => circulos.map((elem) => (<Circulo posicao={elem} numero={props.numero} key={elem}/>));

    return (
        <Dado onClick={props.onClick} tamanho={props.tamanho}>
            {renderCirculos()}
        </Dado>
    );
}

export default Retorno;