'use client'

import Image from 'next/image'
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimatePresence, motion, useInView } from "framer-motion";
export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const data = {
    "events": [
      {
        "short": "ai",
        "title": "Overview of Generative AI: ACM Symposium at Oriental Institute of Science and Technology",
        "date": "May 15, 2024",
        "description": "The ACM at the Oriental Institute of Science and Technology is hosting a Generative AI event on May 15, 2024. This event will feature expert presentations, panel discussions, and networking sessions focused on the latest advancements, applications, and future trends in Generative AI. It aims to foster collaboration and innovation, providing a platform for sharing knowledge and exploring the impact of Generative AI on various industries.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Generative AI event on May 15, 2024. This event will feature expert talks, panel discussions, and networking opportunities centered around the advancements and applications of Generative AI. It aims to bring together professionals and enthusiasts to foster collaboration and innovation in the AI community."
      },
      {
        "short": "blockchain",
        "title": "Blockchain Innovations: ACM Symposium at Oriental Institute of Science and Technology",
        "date": " May 8, 2024",
        "description": "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Blockchain technology on the 8th of May, 2024. This event will gather experts, researchers, and enthusiasts to discuss the latest innovations, applications, and future directions of Blockchain technology. Attendees will benefit from insightful presentations, engaging panel discussions, and valuable networking opportunities. The event aims to promote collaboration and knowledge sharing, highlighting the transformative impact of Blockchain across various sectors.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Blockchain event on May 8, 2024. The event will feature expert talks, panel discussions, and networking sessions centered around the latest innovations and applications of Blockchain technology. It aims to bring together professionals and enthusiasts to foster collaboration and highlight the transformative potential of Blockchain."
      },
      {
        "short": "git",
        "title": "Mastering Git: ACM Workshop at Oriental Institute of Science and Technology",
        "date": "June 3, 2024",
        "description": "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Git on the 3rd of June, 2024. This workshop will provide an in-depth overview of Git, a popular version control system, aimed at students, developers, and professionals. Attendees will learn about Git’s core concepts, commands, and workflows through interactive sessions and practical demonstrations. The event aims to enhance participants' understanding of Git, enabling them to manage and collaborate on projects more effectively.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Git workshop on June 3, 2024. The workshop will offer an in-depth overview of Git, covering core concepts, commands, and workflows. It aims to help students, developers, and professionals enhance their understanding and use of Git for effective project management and collaboration."
      }
    ]
  }

  return (
    <div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-20">
          <div className='font-bold text-3xl'>Events</div>
          <p className='pb-10'>These are all the events conducted by the ACM Student chapter</p>
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              
              {data.events.map((faq, i) => (
                <Link key={i}
                  href={`/events/${faq.short}`} //All the images are sample images
                >
                  <Card key={i} className="shadow-xl bg-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-105 ">
                    <Image width={300} height={300} src={`/${faq.short}.jpg`} alt="image description" className='w-full h-full' quality={100} />
                    <CardHeader className="flex flex-row items-center justify-between space-y-1">

                    </CardHeader>
                    <CardContent className="" >


                    </CardContent>
                  </Card>

                </Link>
              ))}
            </dl>

          </div>

        </div>

    </div>
  );
}
