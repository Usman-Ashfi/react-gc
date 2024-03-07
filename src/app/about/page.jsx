"use client";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("About Page");

  console.log(name);
  return (
    <div className="flex justify-center items-center">
      <button onClick={() => setName("hi")}> {name}</button>
    </div>
  );
};

export default page;
