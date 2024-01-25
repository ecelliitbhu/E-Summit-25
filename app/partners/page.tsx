import React, { FunctionComponent } from "react";
import { Metadata } from "next";
import PartnerCard from "@/components/PartnerCard";
import { partners_data } from "./partner_data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Partners | E-Summit'24 IIT BHU",
    template: "%s | Partners | E-Summit'24 IIT BHU",
  },
};
interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-24 justify-center w-full min-h-screen">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {partners_data.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
