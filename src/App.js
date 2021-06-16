import PaginaDado6 from './PaginaDado6';
import Cabecalho from './componentes/Cabecalho';
import Navegacao from './componentes/Navegacao';
import Conteudo from './componentes/Conteudo';
import CaixaTexto from './componentes/CaixaTexto';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Navegacao/>
      <Switch>
        <Route exact path='/dadojs'>
          <Conteudo>
            <CaixaTexto>
              Este é APP onde estou implementando alguns dados.
              <br/>(D6, D8, D20, etc. . .)
            </CaixaTexto>
            <CaixaTexto>
              Contato:
              <ol>
                <li>
                <a href="https://github.com/Tetr4k">GitHub</a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/gabrielr-dev/">Linkedin</a>
                </li>
                <li>
                <a href="https://twitter.com/ribeir_tk">Twitter</a>
                </li>
              </ol>
            </CaixaTexto>
          </Conteudo>
        </Route>
        <Route path='/dadojs/dado6'>
          <Conteudo>
            <CaixaTexto>Clique no dado para jogar!</CaixaTexto>
            <PaginaDado6/>
          </Conteudo>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
