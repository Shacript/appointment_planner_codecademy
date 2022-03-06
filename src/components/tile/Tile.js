import React from "react";

export const Tile = ({ list }) => {
  const values = Object.values(list);

  return (
    <div className="tile-container">
      {values.map((value, index) => (
        <p className={index === 0 ? "tile-title" : "tile"} key={index}>{value}</p>
      ))}
    </div>
  );
};
