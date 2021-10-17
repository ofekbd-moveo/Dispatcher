import "./App.css";
import WelcomeContainer from "./Components/HomePage/WelcomeContainer/WelcomeContainer";
import Filter from "./Components/Common/Filter/Filer";
import { FilterType } from "../src/Components/Common/types";
const App = (): JSX.Element => {
  const countriesMock: string[] = ["Israel", "France", "London", "Germany", "Greece"];
  return (
    <div>
      <WelcomeContainer />
      <Filter type={FilterType.DROPDWON_LIST} category="Country" filterOptions={countriesMock}></Filter>
    </div>
  );
};

export default App;
