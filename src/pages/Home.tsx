import React from "react";
import { Hero } from "../components/Hero";
import { TeamOverview } from "../components/TeamOverview";
import { Testimonials } from "../components/Testimonials";
import { LatestNews } from "../components/LatestNews";
import { ContactCTA } from "../components/ContactCTA";

export function Home() {
  return (
    <>
      <Hero />
      <TeamOverview />
      <Testimonials />
      <LatestNews />
      <ContactCTA />
    </>
  );
}
