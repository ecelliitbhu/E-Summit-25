import React, { FunctionComponent } from "react";

import Guestcard from "@/components/guestcard/Guestcard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-center pt-24 justify-center w-full h-screen bg-background">
        <Guestcard/>
      </div>
    </section>
  );
};

export default page;
