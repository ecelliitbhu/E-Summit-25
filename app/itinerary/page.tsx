import React, { FunctionComponent } from "react";

import Guestcard from "@/components/guestcard/Guestcard";
import Itinerary from "@/components/Itinerary";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
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
};

export default page;
