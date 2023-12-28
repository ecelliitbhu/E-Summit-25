import React, { FunctionComponent } from "react";
import Contact from "@/components/Contact";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-24 justify-center w-full min-h-screen">
        <Contact />
      </div>
    </section>
  );
};

export default page;
