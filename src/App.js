import PaginaDado6 from './componentes/PaginaDado6';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import styled from 'styled-components';

const App = styled.div`

`

const Retorno = () => {
  return (
    <App>
      <Cabecalho/>
      <Conteudo>
        <PaginaDado6/>
      </Conteudo>
    </App>
  );
}

export default Retorno;
