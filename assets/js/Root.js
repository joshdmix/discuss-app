import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Hi = () => <div>Hi</div>;

const Bye = () => <div>Bye</div>;

class Root extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Hi} />
            <Route path="/bye" component={Bye} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
