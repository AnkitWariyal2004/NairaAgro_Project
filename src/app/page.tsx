"use client";
import React, { useState } from "react";
import ShufflingBanner from "@/app/components/topbanner";
import Banner1 from "@/app/components/banner2";
import Categories from "@/app/components/categories"
export default function Home() {
  return (
    <div className="bg-slate-100 relative">
      <main>
        <section
          className="p-2 h-[65vh] md:h-[50vh] lg:h-[45vh] bg-cover bg-center flex justify-center items-center relative"
          style={{ backgroundImage: "url('/img/bg/provide-bg-1.jpg')" }}
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
          <Categories/>
        </section>
      </main>
    </div>
  );
}
