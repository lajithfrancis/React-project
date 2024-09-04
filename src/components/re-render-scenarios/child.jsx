import React, { useEffect } from "react";

export default function Child({ name }) {
  useEffect(() => {
    console.log(`Child re-rendered`); 
  }, [])
  return <p>Child element with parent toggle status change {name}</p>;
}
