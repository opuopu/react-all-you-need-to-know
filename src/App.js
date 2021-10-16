import logo from './logo.svg';
import './App.css';
import Services from './pages/home/services/Services';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Notfound from './pages/Notfound/Notfound';
import Booking  from './pages/booking/Booking'
import Header from './pages/header/Header';
import Login from './pages/login/Login';
import Authprovider from './context/Authprovider';
import Privateroute from './pages/login/privateroute/Privateroute';
import Img from './pages/img/Img';
function App() {
  return (
    <div className="App">
  <Authprovider>
  <BrowserRouter>
<Header></Header>
  <Switch>
    <Route  exact path="/">
      <Services></Services>
    </Route>
    <Route exact path="/home">
      <Services></Services>

    </Route>
    <Route path="/toggle">
      <Img></Img>
    </Route>
    <Privateroute  path="/booking/:id">
    <Booking></Booking>
    </Privateroute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route exact path="*">
      <Notfound></Notfound>
    </Route>
    
  </Switch>
  </BrowserRouter>
  </Authprovider>
   

    </div>
  );
}

export default App;
