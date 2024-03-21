import { useState } from "react";
import "./country.css";
const Country = ({ country , handleVisitedCountry}) => {
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: visited ? 'purple': 'white'}}>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>area:{area}</p>
      <p>Population:{population}</p>
      <p>
        <small>code:{cca3}</small>
      </p>
      <button>FMark visited</button><br /><br />
      <button onClick={handleVisited}>{visited  ? 'Visited' : 'Going'}</button>
      {visited ? "I have visited this country." : "I wont to visited"}
    </div>
  );
};

export default Country;
