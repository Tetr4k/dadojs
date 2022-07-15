import styled from 'styled-components';
import { corTextoPrimaria, corTextoSecundaria } from '../../Colors'

const Link = styled.a`
  color: ${corTextoPrimaria};
  font-size: 1rem;
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
        <Link href="https://github.com/Tetr4k">por Tetr4k</Link>
    );
}

export default Retorno;