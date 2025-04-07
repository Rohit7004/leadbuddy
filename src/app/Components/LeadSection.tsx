import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="pt-10 px-6 md:px-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-left break-words max-w-full sm:max-w-[90%] md:max-w-none">
          Get Interested Leads:
          <br />
          Long Term, Recent, and
          <br />
          Fresh Property Search
          <br />
          <span className="underline decoration-yellow-400">Inquiries!</span>
        </h1>

        <p className="text-gray-600 mt-5 mb-8 text-left text-lg">
          Long Term for strategic follow-ups, Recent for timely engagement, and Fresh for Quick Conversions.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <Link href="/leadcostcalculator">
            <button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md px-6 py-3 flex items-center transition-colors">
              <Image
                src="/image/caculator.png"
                alt="Calculator"
                width={20}
                height={20}
                className="mr-2"
              />
              Calculate Your Lead Cost
            </button>
          </Link>

          <Link href="/leadform">
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-3 transition-colors">
              I want Property Leads!
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          <Image
            src="/image/leadbuddy-hero.png"
            alt="leadbuddy hero"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;