"use client";

import Image from "next/image";
import Link from "next/link";

import anxiety from "@/public/anxiety.avif";
import trauma from "@/public/truama.jpg";
import perfectionism from "@/public/perfextionism.jpg";



const Services = () => {
  return (
    <section className="w-full bg-[#F7F3E9] px-4 py-10 sm:px-6 md:px-8 lg:px-10">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Anxiety Therapy */}
        <div className="overflow-hidden bg-[#FFFDF8]">

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={anxiety}
              alt="Anxiety Therapy"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex min-h-[190px] flex-col items-center justify-between px-5 py-8 text-center sm:px-7 sm:py-10">

            <h2 className="font-serif text-2xl font-normal text-[#42520C] sm:text-3xl">
              Anxiety Therapy
            </h2>

            <a
              href="/services/Anxiety"
              className="mt-8 border-b border-[#42520C] pb-2 text-xs tracking-[0.18em] text-[#42520C] transition-all duration-300 hover:tracking-[0.23em] hover:text-[#657A16] sm:text-sm"
            >
              Anxiety Therapy
            </a>

          </div>
        </div>


        {/* Trauma Therapy */}
        <div className="overflow-hidden bg-[#FFFDF8]">

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={trauma}
              alt="Trauma Therapy"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex min-h-[190px] flex-col items-center justify-between px-5 py-8 text-center sm:px-7 sm:py-10">

            <h2 className="font-serif text-2xl font-normal text-[#42520C] sm:text-3xl">
              Trauma Therapy
            </h2>

            <a
              href="/services/Trauma"
              className="mt-8 border-b border-[#42520C] pb-2 text-xs tracking-[0.18em] text-[#42520C] transition-all duration-300 hover:tracking-[0.23em] hover:text-[#657A16] sm:text-sm"
            >
              Trauma Therapy
            </a>

          </div>
        </div>


        {/* Perfectionism Therapy */}
        <div className="overflow-hidden bg-[#FFFDF8] md:col-span-2 md:mx-auto md:w-[48%] lg:col-span-1 lg:w-full">

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={perfectionism}
              alt="Perfectionism Therapy"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex min-h-[190px] flex-col items-center justify-between px-5 py-8 text-center sm:px-7 sm:py-10">

            <h2 className="font-serif text-2xl font-normal text-[#42520C] sm:text-3xl">
              Perfectionism Therapy
            </h2>

            <a
              href="/services/Perfectionism"
              className="mt-8 border-b border-[#42520C] pb-2 text-xs tracking-[0.18em] text-[#42520C] transition-all duration-300 hover:tracking-[0.23em] hover:text-[#657A16] sm:text-sm"
            >
              Perfectionism Therapy
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;