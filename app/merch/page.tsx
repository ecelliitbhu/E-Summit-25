"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";



export default function CardWithForm() {
  return (
//     <section>
//   <div className={"mt-32 sm:mx-4 flex justify-center items-center"}>
//     <p className="text-4xl font-bold"> Coming Soon</p>
//   </div>
// </section>
<section className="flex justify-center items-center w-full min-h-screen">
<div>
  <h1
    className="text-6xl m-4 font-semibold sm:py-6"
    style={{
      background: "linear-gradient(90deg, #6A23A6, #E91045)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    }}
  >
    COMING SOON...
  </h1>
</div>
</section>
  );
  /** return (
    <>
      <div className={"flex flex-col items-center justify-center"}>
        <div className="flex flex-col justify-around   mt-12 lg:mt-44">
          <div className="flex flex-col items-center justify lg:mb-0">
            <div className="p-4 md:p-0">
              <Card className="w-full lg:w-[600px] bg-transparent  lg:border border-white mt-12 lg:mt-0 ">
                <CardContent className="">
                  <div className="w-full lg:h-[450px] overflow-hidden rounded-md pt-6">
                    <Image
                      width={600}
                      height={450}
                      src="/images/merch (2).jpg"
                      alt="E-Summit 2024 Merchandise"
                      className="w-full lg:h-full object-cover rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex m-4 items-center justify-center">
            <Link
              href={"https://forms.gle/Ncx6nakeMH8LhhCa8"}
              target={"_blank"}
            >
              <Button>Buy Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ); **/
}
