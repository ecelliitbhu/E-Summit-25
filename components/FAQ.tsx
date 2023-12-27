import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    idx: 1,
    question: "When and where is the event?",
    answer:
      "The event is taking place from 2nd to 4th Feb 2024 in IIT(BHU) Varanasi. However, some of the events demand submissions prior to the main event taking place.",
  },
  {
    idx: 2,
    question: "How will I be notified about the updates?",
    answer:
      "You will be notified about all the updates via your registered email id. For urgent updates, you will be informed via phone call as well.",
  },
  {
    idx: 3,
    question: "What topics are covered in the E-Summit sessions?",
    answer:
      "E-Summits often cover a wide range of topics related to entrepreneurship, technology, and business. Common themes include startup strategies, digital innovation, leadership development, investment trends, and emerging technologies. The specific agenda may vary, so it's advisable to check the event schedule or program to ensure the sessions align with your interests and goals.",
  },
];

export default function FAQ() {
  return (
    <section className="flex justify-center items-center  gap-6 pb-8 pt-6 md:py-10">
      <Card className={"p-4 md:w-[780px]"}>
        <CardHeader className={""}>
          <CardTitle className={"text-center"}>
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="">
            {data.map((faq, index) => {
              return (
                <AccordionItem value={"item-" + index} key={index}>
                  <AccordionTrigger className={"text-start"}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={""}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
