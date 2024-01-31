import React, { FunctionComponent } from "react";

import Guestcard from "@/components/guestcard/Guestcard";
import Itinerary from "@/components/Itinerary";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className={"mt-32 sm:mx-4"}>
        <Itinerary/>
      </div>
    </section>
  );
};

export default page;
