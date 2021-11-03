import "./App.css";
import { DispatcherPage } from "./Components/DispatcherPage/DispatcherPage";
import { WelcomePage } from "./Components/HomePage/WelcomeContainer/WelcomePage";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <ProtectedRoute path="/dispatcher" component={DispatcherPage} />
      </Switch>
    </div>
  );
};

export default App;
