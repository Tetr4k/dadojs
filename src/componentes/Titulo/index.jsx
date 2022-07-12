import styled from 'styled-components';
import { corTextoPrincipal, corTextoSecundaria } from '../../Colors'

const Titulo = styled.h1`
  align-items: center;
  color: ${corTextoPrincipal};
  font-size: 3rem;
  justify-content: center;
  margin-left: 1rem;
  text-decoration: none;
  text-shadow: 0 0 0.5rem black;
  &:hover{
    color: ${corTextoSecundaria};
    text-shadow: none;
  }
`

const Retorno = () => {
    return (
        <Titulo>DadoJS</Titulo>
    );
}

export default Retorno;