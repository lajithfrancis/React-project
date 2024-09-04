import React, { useEffect, useState } from "react";
import Child from "./child";

export default function ReRenderScenarios() {
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState('child')
  useEffect(() => {
    console.log(`Parent re-rendered`);
  }, [toggle]);
  const handleOnClick = () => {
    setToggle(!toggle);
    setInfo(`'child': ${toggle}`)
  }
  return (
    <>
      <h1>Re-render scenarios</h1>
      <button onClick={handleOnClick}>Re-render para</button>
      <Child name={info} />
    </>
  );
}
