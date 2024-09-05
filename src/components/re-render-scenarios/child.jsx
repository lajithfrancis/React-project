import React, { } from "react";

export default function Child({ name }) {
  console.log('Child component rendered');
  return <p>Child element with parent toggle status change {name}</p>;
}
