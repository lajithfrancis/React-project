import React, { useEffect, useState } from "react";
import Child from "./child";

export default function ReRenderScenarios() {
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState()
  useEffect(() => {
    console.log(`Parent re-rendered`);
  }, [toggle]);
  const handleOnClick = () => {
    setToggle(!toggle);
    setInfo(`${toggle}`)
  }
  return (
    <>
      <h1>Re-render scenarios</h1>
      <button onClick={handleOnClick}>Check</button>
      <Child name={info} />
    </>
  );
}
