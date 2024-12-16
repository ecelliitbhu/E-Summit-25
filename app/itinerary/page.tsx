import React, { FunctionComponent } from "react";

import Guestcard from "@/components/guestcard/Guestcard";
import Itinerary from "@/components/Itinerary";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
  <div className={"mt-32 sm:mx-4 flex justify-center items-center"}>
    <p className="text-4xl font-bold"> Coming Soon</p>
  </div>
</section>
  );
};

export default page;
