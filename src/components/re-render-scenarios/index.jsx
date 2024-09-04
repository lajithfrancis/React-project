import React, { useEffect, useState } from "react";
import Child from "./child";

export default function ReRenderScenarios() {
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(`Parent re-rendered due to toggle`);
  }, [toggle]);

  const handleOnClick = () => {
    setToggle(prevToggle => {
        const newToggle = !prevToggle;
        setInfo(`${newToggle}`);
        return newToggle;
      });
  }
  return (
    <>
      <h1>Re-render scenarios</h1>
      <button onClick={handleOnClick}>Check - {toggle ? 'true' : 'false'}</button>
      <Child name={info} />
    </>
  );
}
