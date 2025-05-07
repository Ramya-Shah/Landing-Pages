import React from 'react'
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import ProgramCards from "@/components/ProgramCards";
import ProgramNav from "@/components/ProgramNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dhirubhai Ambani University",
  description: "Admission Enquiry Website for Dhirubhai Ambani University",
};

export default function Home () {
  return (
    <main className="min-h-screen bg-white">
      <HomeHeader />
      <section id="program-nav">
        <ProgramNav bgText='ALL BRANCHES'/>
      </section>
      <section id="programme-cards">
        <ProgramCards />
      </section>
      <section id="details">
        <Footer />
      </section>
    </main>
  )
}

