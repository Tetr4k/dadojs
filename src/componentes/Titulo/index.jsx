import styled from 'styled-components';
import { corTextoPrimaria } from 'Colors';

const Titulo = styled.h1`
  color: ${corTextoPrimaria};
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