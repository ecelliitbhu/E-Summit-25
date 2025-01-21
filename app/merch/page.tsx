"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CardWithForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* Cards Container */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 mt-20 lg:mt-28">
        {/* Card 1 */}
        <Card className="w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%] bg-transparent border border-black bg-white rounded-lg">
          <CardContent>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-md">
              <Image
                src="/images/T-Shirt Front.png"
                alt="E-Summit 2024 Merchandise Front"
                width={600}
                height={450}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%] bg-transparent border border-white bg-white rounded-lg">
          <CardContent>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-md">
              <Image
                src="/images/T-Shirt Back.png"
                alt="E-Summit 2024 Merchandise Back"
                width={600}
                height={450}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Section */}
      <section>
        <div className="mt-12 sm:mx-4 flex justify-center items-center">
          <p
            className="text-4xl font-bold"
            style={{
              background: "linear-gradient(90deg, #6A23A6, #E91045)", // Adjust gradient as per your website's theme
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Coming Soon
          </p>
        </div>
      </section>
    </div>
  );
}
