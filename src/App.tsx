import "./App.css";
import WelcomeContainer from "./Components/HomePage/WelcomeContainer/WelcomeContainer";
import Filter from "./Components/Common/Filter/Filer";
import { FilterType } from "../src/Components/Common/types";
const App = (): JSX.Element => {
  const countries: string[] = ["Israel", "France", "London", "Germany", "Greece"];
  return (
    <div>
      {/* </WelcomeContainer> */}
      {console.log(process.env)}
      <Filter type={FilterType.DROPDWON_LIST} category="Country" dataList={countries}></Filter>
    </div>
  );
};

export default App;
