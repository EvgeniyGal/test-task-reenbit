import { addDays, compareAsc } from "date-fns";
import { createContext, useEffect, useState } from "react";

const TripsContext = createContext({
  trips: [],
  currentCity: 0,
  addTrip: () => {},
  setCurrentTrip: () => {},
});

const INITIAL_DATA = {
  trips: [
    {
      city: "Berlin",
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
    },
  ],
  currentCity: "Berlin",
};

export function TripsContextProvider({ children }) {
  const [tripsState, setTripsState] = useState(INITIAL_DATA);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("tripsData"));

    if (localData) {
      setTripsState({ trips: localData, currentCity: localData[0].city });
    }
  }, []);

  function addTrip(data) {
    setTripsState((prevState) => ({
      ...prevState,
      trips: [...prevState.trips, data].sort((a, b) =>
        compareAsc(a.startDate, b.startDate)
      ),
    }));
  }

  function setCurrentTrip(choseCity) {
    setTripsState((prevState) => ({ ...prevState, d: choseCity }));
  }

  const tripsContextValue = {
    trips: tripsState.trips,
    currentCity: tripsState.currentCity,
    addTrip,
    setCurrentTrip,
  };

  return (
    <TripsContext.Provider value={tripsContextValue}>
      {children}
    </TripsContext.Provider>
  );
}

export default TripsContext;
