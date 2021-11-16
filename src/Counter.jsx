import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./state";

const Counter = () => {
  //   const [count, setCount] = useRecoilState(countAtom);
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

export default Counter;
