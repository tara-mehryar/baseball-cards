import playerData from "./playerData.js";
import { useState } from "react";

function BaseballCard(props) {
  let [showPicture, setShowPicture] = useState(true);

  const toggleCard = () => {
    setShowPicture(!showPicture)
  };

  if (showPicture){
  return (
    <div className="card" onClick={ toggleCard }>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} />
    </div>
  )} else {
  const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    <p name={statName}> {statName}:{statValue} </p>
    ));
  return (
    <div className="card" onClick={ toggleCard }>
      <h2> {props.name} </h2>
      <p> Team: {props.team} </p>
      <p> Position: {props.position} </p>
      {statsDisplay}
    </div>
  );
}}

function App() {
  const cards = playerData.map((player) => (
  <BaseballCard 
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  key={player.cardId}
  />
  ));

  return <>{cards}</>;
}

export default App;
