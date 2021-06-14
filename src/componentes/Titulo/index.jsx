import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { corTextoPrincipal } from '../../Colors'

const Titulo = styled(Link)`
  color: ${corTextoPrincipal};
  font-size: 3rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`

const Retorno = () => {
    return (
        <Titulo to='/dadojs'>DadoJS</Titulo>
    );
}

export default Retorno;