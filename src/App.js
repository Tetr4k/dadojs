import Dado6 from './components/Dado6'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        aaaaa
      </header>
      <Switch>
        <Route exact path='/'>
          bbbb
        </Route>
        <Route path='/dado6'>
          <Dado6/>
        </Route>
        
      </Switch>
    </Router>  
  );
}

export default App;
