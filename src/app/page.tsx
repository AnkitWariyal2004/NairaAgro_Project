"use client";

import React from "react";
import ContactUs from "@/app/components/contactus"
import ShufflingBanner from "@/app/components/topbanner";
import Banner1 from "@/app/components/banner2";
import Categories from "@/app/components/categories";
import Banner3 from "@/app/components/banner3";
// import SwappingCards from "@/app/components/banner4";
import Whtprovd from "@/app/components/whtprov";
import Gallary from "@/app/components/gallary"

export default function Home() {
  return (
    <div className="bg-slate-100 relative">
      <main>
        <section>
          <div className="mt-2" id="home">
            <ShufflingBanner />
          </div>
        </section>
        <section>
        <section id="about-us">
          <Banner1 />
        </section>
          <Banner3 />
        </section>
        {/* <section>
          <AboutUs/>
        </section> */}
        <section>
          <Categories />
        </section>
        
        {/* <section>
          <SwappingCards />
        </section> */}
        <section id="services">
          <Whtprovd />
        </section>
        <section id="gallary">
          <Gallary/>
        </section>
        
        <section id="contact-us">
          <ContactUs/>
        </section>
      </main>
    </div>
  );
}
