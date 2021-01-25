/*import React from 'react'

export default function App({ children }) {
  return (
    <div className="home-app">
      <div className="page-container">{children}</div>
    
    
</div>
  );
}*/
import React from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar"


 const App = () => 
{
  return(
    <>
    <Navbar/>
    <Switch >
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/ service" component={Services} />
    <Route exact path="/contact" component={Contact} />
    
  <Redirect to ="/"/>

  

    <Home />
    </Switch>
    
</>
  )

}
export default App;