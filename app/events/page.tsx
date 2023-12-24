import React, { FunctionComponent } from 'react';
import EventsCard from "@/components/EventsCard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {

  return (
      <section>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
          <h1 className="text-4xl font-bold text-white">This is a page</h1>
            <EventsCard />
        </div>
      </section>
  );
};

export default page;
