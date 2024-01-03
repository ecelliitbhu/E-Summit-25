import React, { FunctionComponent } from "react";
import { Metadata } from "next";

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
      <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
        <h1 className="text-4xl font-bold text-white">Coming soon...</h1>
      </div>
    </section>
  );
};

export default page;
