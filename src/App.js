import { Switch, Route } from "react-router-dom";

import AppDrawerBar from "./compponents/AppDrawerBar";
import Login from "./pages/Login";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" exact component={Login} />
        <Route path="/dashboard" component={AppDrawerBar} />
      </Switch>
    </div>
  );
}
