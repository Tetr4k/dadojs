import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { corTextoPrincipal, corTextoSecundaria } from '../../Colors'

const Titulo = styled(Link)`
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
        <Titulo to='/dadojs'>DadoJS</Titulo>
    );
}

export default Retorno;