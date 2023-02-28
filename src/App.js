import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";


import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

import Form from "./components/Form";
import DetailCountryCard from "./components/DetailCountryCard";
 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/form" component={Form}></Route>
        <Route exact path="/country/:id" component={DetailCountryCard}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
