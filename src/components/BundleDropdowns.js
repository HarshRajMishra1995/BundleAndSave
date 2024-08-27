import React from "react";
import Dropdown from "./Dropdown";

//component to add number of dropdowns to each pair box based on pairs props value
function BundleDropdowns({ pairs }) {
  const dropdowns = [];

  for (let i = 1; i <= pairs; i++) {
    dropdowns.push(
      <React.Fragment key={i}>
        <Dropdown label={`Size #${i}`} />
        <Dropdown label={`Colour #${i}`} />
      </React.Fragment>
    );
  }

  return <div className="grid grid-cols-2 gap-2 mt-2">{dropdowns}</div>;
}

export default BundleDropdowns;
