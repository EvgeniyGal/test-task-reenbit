import cities from "../../data/cities-data";

export default function TripsItem({ onClick, isActive, trip }) {
  const { urlImg, urlWebp } = cities.find((city) => city.city === trip.city);
  return (
    <li onClick={() => onClick(trip.city)} className="trips-item">
      <picture>
        <source srcSet={urlWebp} type="image/webp" />
        <img src={urlImg} alt={trip.city} />
      </picture>
      <div className={`trips-item-data ${isActive ? "active" : ""}`}>
        <h3>{trip.city}</h3>
        <p>{trip.dates}</p>
      </div>
    </li>
  );
}
