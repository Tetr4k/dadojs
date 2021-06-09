import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { corTextoPrincipal } from '../../Colors'

const Titulo = styled(Link)
`
  color: ${corTextoPrincipal};
  font-size: 5rem;
  text-decoration: none;
`

const Retorno = () => {
    return (
        <Titulo to='/dadojs'>DadoJS</Titulo>
    );
}

export default Retorno;