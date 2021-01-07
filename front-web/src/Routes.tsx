import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import NavBar from "./navbar";
import Orders from "./Orders";



function Routes(){
   return( 
        <BrowserRouter>
        <NavBar/>
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
   )
}

export default Routes;