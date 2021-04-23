import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import { AlertState } from "./context/alert/alertState";
import Alert from "./components/Alert";

function App() {
    return (
        <div className="container pt-4">
        <AlertState>
            <BrowserRouter>
                <Alert alert={{text: 'Test alert'}}/>
                <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/profile/:name" component={Profile}/>
                </Switch>
            </BrowserRouter>
        </AlertState>
        </div>
    );
}

export default App;
