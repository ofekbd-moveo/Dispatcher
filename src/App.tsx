import "./App.css";
import { SideBarFilter } from "./Components/Common/Filter/SideBarFilter";
import { SideBarFilterType } from "./Components/Common/types";
import { DispatcherPage } from "./Components/DispatcherPage/DispatcherPage";
import { HomePage } from "./Components/HomePage/WelcomeContainer/HomePage";

const App = (): JSX.Element => {
  const filterByMock = { "Search in": ["Everything"], Sources: [], Language: [], Dates: [] };
  const optionsListMock = ["Search in", "Sources", "Language", "Dates"];
  return (
    <div className="app-container">
      {/* <HomePage></HomePage> */}

      <DispatcherPage></DispatcherPage>
    </div>
  );
};

export default App;
