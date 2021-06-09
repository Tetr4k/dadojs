import React from 'react';
import styled from 'styled-components';
import Circulo from '../Circulo';
import { corDadoPadrao } from '../../../Colors'

const Dado = styled.div
`
    background: ${corDadoPadrao};
    border: ${corDadoPadrao} 1px solid;
    border-radius: 25%;
    display: grid;
    gap: 1rem;
    grid-template-columns: ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem;
    grid-template-rows: ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem ${(props) => props.tamanho}rem;
    height: calc(3 * ${(props) => props.tamanho}rem + 2rem);
    margin: 1rem;
    padding: ${(props) => props.tamanho}rem;
    width: calc(3 * ${(props) => props.tamanho}rem + 2rem);

    @media screen and (max-width: 900px){
        grid-template-columns: ${(props) => props.tamanho/3}rem ${(props) => props.tamanho/3}rem ${(props) => props.tamanho/3}rem;
        grid-template-rows: ${(props) => props.tamanho/3}rem ${(props) => props.tamanho/3}rem ${(props) => props.tamanho/3}rem;
        height: calc(3 * ${(props) => props.tamanho/3}rem + 2rem);
        padding: ${(props) => props.tamanho/3}rem;
        width: calc(3 * ${(props) => props.tamanho/3}rem + 2rem);
    }
`

const Retorno = (props) => {

    const circulos = [1, 2, 3, 4, 5, 6, 7];

    const renderCirculos = () => circulos.map((elem) => (<Circulo posicao={elem} numero={props.numero} key={elem}/>));

    return (
        <Dado tamanho={props.tamanho}>
            {renderCirculos()}
        </Dado>
    );
}

export default Retorno;