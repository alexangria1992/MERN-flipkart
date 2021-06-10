import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
         <Route path="/" component={Home}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
