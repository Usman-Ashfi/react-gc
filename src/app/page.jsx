"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  let [count, setCount] = useState(false);

  function chg() {
    if (count) {
      setCount(false);
    } else {
      setCount(true);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 ">
      <div>{count ? <h1>Good Work</h1> : <></>}</div>
      <button onClick={() => chg()}>Click Me</button>
    </div>
  );
};

export default page;
