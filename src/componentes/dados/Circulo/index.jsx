import styled from 'styled-components';
import { coresCirculos } from '../../../Colors';

const Circulo = styled.div
`
    background: ${ (props) => coresCirculos[props.numero-1]};
    border-radius: 100%;
    grid-row: ${ (props) => {
        switch(props.posicao){
            case 1:
            case 2: return '1 / 1';
            case 6:
            case 7: return '3 / 3';
            default: return '2 / 2';
        }
    }};
    grid-column: ${ (props) => {
        switch(props.posicao){
            case 1:
            case 3:
            case 6: return '1 / 1';
            case 4: return '2 / 2';
            default: return '3 / 3';
        }
    }};
    display: ${ (props) => {
        switch(props.numero){
            case 1:/*Numero 1*/
                if(props.posicao !== 4) return 'none';
                return 'block';
            case 2:/*Numero 2*/
                if(props.posicao !== 2 && props.posicao !== 6) return 'none';
                return 'block';
            case 3:/*Numero 3*/    
                if(props.posicao !== 1 && props.posicao !== 4 && props.posicao !== 7) return 'none';
                return 'block';
            case 4:/*Numero 4*/
                if(props.posicao === 3 || props.posicao === 4 || props.posicao === 5) return 'none';
                return 'block';
            case 5:/*Numero 5*/
                if(props.posicao === 3 || props.posicao === 5) return 'none';
                return 'block';
            case 6:/*Numero 6*/
                if(props.posicao === 4) return 'none';
                return 'block';
            default: return 'none';
        }
    }};
`

export default Circulo;