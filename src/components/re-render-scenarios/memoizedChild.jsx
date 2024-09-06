import React, { useEffect, memo } from "react";

// Memoizing the component to avoid re-renders if props don't change
// const MemoizedChild = memo(({ name }) => {
//   useEffect(() => {
//     console.log("Child component mounted");
//   }, []);

//   console.log("MemoizedChild component rendered");

//   return <p>Child element with parent toggle status change: {name}</p>;
// });

export function Child({ name }) {
    console.log('Child component rendered');
    return <p>Child element with parent toggle status change {name}</p>;
  }
  
export default memo(Child);
