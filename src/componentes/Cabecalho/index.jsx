import styled from 'styled-components';
import Titulo from '../Titulo';
import { corFundoPrincipal, corTextoPrincipal } from '../../Colors'

const Cabecalho = styled.header
`
  align-items: center;
  background-color: ${corFundoPrincipal};
  color: ${corTextoPrincipal};
  display: flex;
  flex-direction: column;
  font-family: 'Rubik', sans-serif;
  height: 10rem;
  justify-content: center;
`

const retorno = () => {
    return (
        <Cabecalho>
            <Titulo/>
        </Cabecalho>
    );
};

export default retorno;