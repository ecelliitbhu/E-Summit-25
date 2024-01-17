"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
export default function CardWithForm() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around   mt-12 lg:mt-44">
        <div className="flex flex-col items-center justify lg:mb-0">
          <div className=" p-4 md:p-0">
            <Card className="w-full lg:w-[600px] bg-transparent  lg:border border-white mt-12 lg:mt-0 ">
              <CardContent className="">
                <div className="w-full lg:h-[450px] overflow-hidden rounded-md pt-6">
                  <img
                    src="/images/merch (2).jpg"
                    alt="Project Image"
                    className="w-full lg:h-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start w-full lg:w-[400px] lg:mt-16">
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="flex flex-col ">
              <div className="flex justify-center lg:justify-start items-center">
                <p className="text-primary font-bold lg:text-3xl m-2">
                  Email :
                </p>
                <Link href="mailto:ecell@iitbhu.ac.in">
                  <p className="hover:text-blue-500 cursor-pointer lg:text-xl">
                    ecell@iitbhu.ac.in
                  </p>
                </Link>
              </div>
              <div className="flex justify-center lg:justify-start items-center mt-2 lg:mt-0">
                <p className="text-primary font-bold lg:text-3xl m-2">
                  Phone :
                </p>
                <p className="hover:text-blue-500 cursor-pointer lg:text-xl">
                  1234567890
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center pb-4">
              <p className="text-primary font-bold lg:text-3xl m-2">UPI-ID :</p>
              <p className="hover:text-blue-500 cursor-pointer lg:text-xl">
                john.doe@bankname
              </p>
            </div>
            <div className="w-[250px] h-[40px] m-2 border bg-gray-900 bg-opacity-75 border-solid border-white rounded-3xl text-center flex justify-between items-center lg:ml-6 ">
              <p className="pl-2">Black T-shirt</p>
              <Button
                className="w-[120px] h-[30px] rounded-3xl mr-1 bg-violet-800"
                onClick={() =>
                  router.push("https://forms.gle/ZjLMvsxQyzMZjjURA")
                }
              >
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
