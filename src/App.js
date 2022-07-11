import PaginaDado6 from './PaginaDado6';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import CaixaTexto from './componentes/CaixaTexto';

function App() {
  return (
    <App>
      <Cabecalho/>
      <Conteudo>
        <CaixaTexto>Clique no dado para jogar!</CaixaTexto>
        <PaginaDado6/>
      </Conteudo>
    </App>
  );
}

export default App;
