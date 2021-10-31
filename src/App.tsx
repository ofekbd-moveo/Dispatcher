import "./App.css";
import { DispatcherPage } from "./Components/DispatcherPage/DispatcherPage";
const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <DispatcherPage></DispatcherPage>
    </div>
  );
};

export default App;
