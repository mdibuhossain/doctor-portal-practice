import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Shared/Navigation';
import AuthContext from './Context/AuthContext';
import Appointment from './Pages/Appointment';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthContext>
        <BrowserRouter>
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
