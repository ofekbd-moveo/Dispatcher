import "./App.css";
import { DispatcherPage } from "./Components/DispatcherPage/DispatcherPage";
import { HomePage } from "./Components/HomePage/WelcomeContainer/HomePage";

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <HomePage></HomePage>
      <DispatcherPage></DispatcherPage>
    </div>
  );
};

export default App;
