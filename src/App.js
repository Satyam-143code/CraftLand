import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
