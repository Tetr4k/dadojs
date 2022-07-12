import PaginaDado6 from './PaginaDado6';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';

const App = () => {
  return (
    <div>
      <Cabecalho/>
      <Conteudo>
        <PaginaDado6/>
      </Conteudo>
    </div>
  );
}

export default App;
