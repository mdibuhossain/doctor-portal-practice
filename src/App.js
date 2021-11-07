import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Shared/Navigation';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
