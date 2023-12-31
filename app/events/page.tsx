import React, { FunctionComponent } from "react";
import {
  funEvents,
  schoolEvents,
  startupEvents,
  stategyEvents,
} from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section className="pt-24 justify-center w-full min-h-screen">
      <EventsSection sectionTitle="Startup Events" events={startupEvents} />
      <EventsSection sectionTitle="Strategy Events" events={stategyEvents} />
      <EventsSection sectionTitle="Fun Events" events={funEvents} />
      <EventsSection sectionTitle="School Events" events={schoolEvents} />
    </section>
  );
};

export default page;
