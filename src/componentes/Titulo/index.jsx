import styled from 'styled-components';
import {corTextoPrincipal} from '../../Colors'

const Titulo = styled.h1`
  color: ${corTextoPrincipal};
  font-size: 3rem;
  text-shadow: 0 0 0.5rem black;
`

const Retorno = () => {
    return (
        <Titulo>
          DadoJS
        </Titulo>
    );
}

export default Retorno;