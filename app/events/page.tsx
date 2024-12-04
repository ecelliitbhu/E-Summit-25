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

const gradientTextStyle = {
  background: "linear-gradient(90deg, #6A23A6, #E91045)", 
  WebkitBackgroundClip: "text", 
  WebkitTextFillColor: "transparent", 
};

const page: FunctionComponent<Props> = (props) => {
  return (
    <section className="pt-24 justify-center w-full min-h-screen">
      
      <EventsSection sectionTitle={
          <span style={gradientTextStyle}>Startup Events</span>
        }  events={startupEvents}
      />
      <EventsSection sectionTitle={
          <span style={gradientTextStyle}>Strategy Events</span>
        }
        events={stategyEvents}
      />
      <EventsSection sectionTitle={
          <span style={gradientTextStyle}>Fun Events</span>
        }
        events={funEvents}
      />
      <EventsSection sectionTitle={
          <span style={gradientTextStyle}>School Event</span>
        }
        events={schoolEvents}
      />
    </section>
  );
};

export default page;
