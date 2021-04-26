import React from "react";

import Main from "./components/Main";
import Detail from "./components/Detail";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <div className="container">
          <Route path="/" exact component={Main} />
          <Route path="/movie/:id" exact component={Detail} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
