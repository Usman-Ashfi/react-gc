"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Hero from "@/components/Hero";

const page = () => {
  const [loader, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loader ? <Loading /> : <Hero />}</div>;
};

export default page;
