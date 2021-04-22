import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
      <div className="container pt-4">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile/:name" component={Profile} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
