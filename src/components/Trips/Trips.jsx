import { useContext } from "react";
import TripsItem from "./TripsItem";
import TripsContext from "../../store/TripsContext";

export default function Trips() {
  const tripsContext = useContext(TripsContext);

  return (
    <ul>
      {tripsContext.trips.map((trip) => (
        <TripsItem
          key={trip.city}
          onClick={tripsContext.setCurrentTrip}
          isActive={trip.city === tripsContext.currentCity}
          trip={trip}
        />
      ))}
    </ul>
  );
}
