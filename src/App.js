import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";


import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

import Form from "./components/Form";
import DetailCountryCard from "./components/DetailCountryCard";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./Theme";


function App() {
  return (
    <ChakraProvider  theme={theme}>
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/form" component={Form}></Route>
        <Route exact path="/country/:id" component={DetailCountryCard}></Route>
      </div>
    </BrowserRouter>
    </ChakraProvider>
   
  );
}

export default App;
