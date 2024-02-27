"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const page = () => {
  let [count, setCount] = useState(false);
  let [count1, setCount1] = useState(false);

  useEffect(() => {
    console.log("hi");
  }, [count]);

  function chg() {
    if (count) {
      setCount(false);
    } else {
      setCount(true);
    }
  }

  function chgs() {
    if (count1) {
      setCount1(false);
    } else {
      setCount1(true);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 ">
      <div className="border py-6 px-4">
        <div>{count ? <h1>Good Work</h1> : <h1>dependcey</h1>}</div>
        <button onClick={() => chg()}>Click Me</button>
      </div>

      <div className="border py-6 px-4">
        <div>{count1 ? <h1>Good Work</h1> : <h1>Count1</h1>}</div>
        <button onClick={() => chgs()}>Click Me</button>
      </div>
    </div>
  );
};

export default page;
