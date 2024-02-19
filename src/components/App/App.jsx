import { TripsContextProvider } from "../../store/TripsContext";
import Input from "../Input/Input";
import Trips from "../Trips/Trips";
import "./App.css";

function App() {
  return (
    <TripsContextProvider>
      <div className="main-container">
        <div>
          <header>
            <h1 className="logo">
              Weather <span>Forecast</span>
            </h1>
          </header>
          <Input
            className="search-bar"
            name="searchBar"
            placeholder="Search your trip"
          />
          <Trips />
          <div>
            <h2>Week</h2>
            <ul>
              <li>Monday</li>
            </ul>
          </div>
        </div>

        <aside>Aside</aside>
      </div>
    </TripsContextProvider>
  );
}

export default App;
