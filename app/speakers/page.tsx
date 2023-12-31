import React, { FunctionComponent } from "react";
import Contact from "@/components/Contact";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  past_speakers_data,
  current_speakers_data,
} from "@/app/speakers/speaker_data";
import SpeakerCard from "@/components/SpeakerCard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-24 justify-center w-full min-h-screen">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Speakers
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <Tabs
            defaultValue="presentSpeaker"
            className="sm:w-[400px] md:w-[1200px] text-center"
          >
            <TabsList>
              <TabsTrigger value="presentSpeaker">Present Speaker</TabsTrigger>
              <TabsTrigger value="pastSpeaker">Past Speaker</TabsTrigger>
            </TabsList>
            <TabsContent value="presentSpeaker" className={""}>
              <div className={"md:flex justify-center items-center p-10"}>
                {current_speakers_data.map((speaker, index) => (
                  <SpeakerCard
                    name={speaker.name}
                    instaURL={speaker.instaURL}
                    linkedinURL={speaker.linkedinURL}
                    // twitterURL={speaker.twitterURL}
                    imgURL={speaker.imgURL}
                    key={index}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pastSpeaker">
              <div className={"md:flex justify-center items-center p-10"}>
                {past_speakers_data.map((speaker, index) => (
                  <SpeakerCard
                    name={speaker.name}
                    instaURL={speaker.instaURL}
                    linkedinURL={speaker.linkedinURL}
                    // twitterURL={speaker.twitterURL}
                    imgURL={speaker.imgURL}
                    key={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {/*<Contact />*/}
      </div>
    </section>
  );
};

export default page;
