import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import LatestWork from "../components/LatestWork";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <LatestWork />
      <Contact />
    </>
  );
}
