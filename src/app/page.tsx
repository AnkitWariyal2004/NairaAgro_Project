"use client";

import React from "react";
import ShufflingBanner from "@/app/components/topbanner";
import Banner1 from "@/app/components/banner2";
import Categories from "@/app/components/categories";
import Banner3 from "@/app/components/banner3";
import SwappingCards from "@/app/components/banner4";
import Whtprovd from "@/app/components/whtprov";
import AboutUs from "@/app/components/aboutus";

export default function Home() {
  return (
    <div className="bg-slate-100 relative">
      <main>
        <section
          className="p-2 h-[65vh] md:h-[40vh] lg:h-[55vh] bg-cover bg-center flex justify-center items-center relative"
          style={{ backgroundImage: "url('/img/bg/counter-bg.jpg')" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
          <div className="absolute bottom-0 w-full mt-24">
            <ShufflingBanner />
          </div>
        </section>
        <section>
          <Banner1 />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <Banner3 />
        </section>
        <section>
          <SwappingCards />
        </section>
        <section>
          <Whtprovd />
        </section>
        <section>
          <AboutUs/>
        </section>
      </main>
    </div>
  );
}
