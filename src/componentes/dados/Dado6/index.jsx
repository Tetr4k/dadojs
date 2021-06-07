import React, { useState } from 'react';
import styled from 'styled-components';

const Dado = styled.div
`
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

const Circulo = styled.div
`
    background: black;
    border-radius: 1em;
    grid-row: ${ (props) => {
        switch(props.numero){
            case '1':
            case '2': return '1 / 1';
            case '6':
            case '7': return '3 / 3';
            default: return '2 / 2';
        }
    }};
    grid-column: ${ (props) => {
        switch(props.numero){
            case '1':
            case '3':
            case '6': return '1 / 1';
            case '4': return '2 / 2';
            default: return '3 / 3';
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
        circulos.push(<Circulo numero={x.toString()} key={x}/>);
    }
    
    return (
        <Dado onClick={() => fazSorteio()}>
            {circulos}
        </Dado>
    );
}

export default Dado6;

/*
/*Numero 6
/*
---
* *
* *
* *
---

.dado--6 #p1,
.dado--6 #p2,
.dado--6 #p3,
.dado--6 #p5,
.dado--6 #p6,
.dado--6 #p7{
    background-color: black;
}

.dado--6 #p4{
    background-color: white;
}

/*Numero 5*/
/*
---
* *
 *
* *
---

.dado--5 #p2,
.dado--5 #p4,
.dado--5 #p6,
.dado--5 #p1,
.dado--5 #p7{
    background-color: black;
}

.dado--5 #p3,
.dado--5 #p5{
    background-color: white;
}

/*Numero 4*/
/*
---
* *
 
* *
---

.dado--4 #p1,
.dado--4 #p2,
.dado--4 #p6,
.dado--4 #p7{
    background-color: black;
}

.dado--4 #p3,
.dado--4 #p4,
.dado--4 #p5{
    background-color: white;
}

/*Numero 3*/
/*
---
*
 *
  *
---

.dado--3 #p1,
.dado--3 #p4,
.dado--3 #p7{
    background-color: black;
}

.dado--3 #p2,
.dado--3 #p3,
.dado--3 #p5,
.dado--3 #p6{
    background-color: white;
}

/*Numero 2*/
/*
---
  *

*
---

.dado--2 #p2,
.dado--2 #p6{
    background-color: black;
}

.dado--2 #p1,
.dado--2 #p3,
.dado--2 #p4,
.dado--2 #p5,
.dado--2 #p7{
    background-color: white;
}

/*Numero 1*/
/*
---
  
 *

---

.dado--1 #p4{
    background-color: black;
}

.dado--1 #p1,
.dado--1 #p2,
.dado--1 #p3,
.dado--1 #p5,
.dado--1 #p6,
.dado--1 #p7{
    background-color: white;
}
*/