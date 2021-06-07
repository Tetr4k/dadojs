import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { corTextoPrincipal } from '../../Colors'

const Titulo = styled(Link)
`
  color: ${corTextoPrincipal};
  font-size: 5em;
  text-decoration: none;
`

const retorno = () => {
    return (
        <Titulo to='/'>DadoJS</Titulo>
    );
}

export default retorno;