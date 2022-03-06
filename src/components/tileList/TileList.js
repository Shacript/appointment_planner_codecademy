import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ lists }) => {
  return (
    <div>
      {lists.map((list, index) => (
        <Tile list={list} key={index} />
      ))}
    </div>
  );
};
