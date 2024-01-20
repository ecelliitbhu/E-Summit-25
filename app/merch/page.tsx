"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function CardWithForm() {
  return (
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
  );
}
