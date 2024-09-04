import React, { useEffect, useMemo, useState } from "react";
import Child from "./child";
import MemoizedChild from "./memoizedChild";

export default function ReRenderScenarios() {
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(`Parent re-rendered due to toggle`);
  }, [toggle]);

  const handleOnClick = () => {
    setToggle(prevToggle => {
        const newToggle = !prevToggle;
        setInfo(`${'info'}`);
        return newToggle;
      });
  }
  const memoizedChild = useMemo(() => {
    return <Child name={info} />;
  }, [info]); 

  return (
    <>
      <h1>Re-render scenarios</h1>
      <button onClick={handleOnClick}>Check - {toggle ? 'true' : 'false'}</button>
      <MemoizedChild name={info} />
      {/* {memoizedChild} */}
      {/* <Child name={info} /> */}
    </>
  );
}
