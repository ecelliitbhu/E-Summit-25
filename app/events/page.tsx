import React, { FunctionComponent } from "react";
import {
  funEvents,
  schoolEvents,
  startupEvents,
  stategyEvents,
} from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Events | E-Summit'24 IIT BHU",
    template: "%s | Events | E-Summit'24 IIT BHU",
  },
};
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
