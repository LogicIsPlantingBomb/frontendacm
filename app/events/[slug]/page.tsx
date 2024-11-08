'use client'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"



const slug = ({ params }: { params: { slug: string } }) => {
  const data = {
    "events": [
      {
        "short": "ai",
        "title": "Overview of Generative AI: ACM Symposium at Oriental Institute of Science and Technology",
        "date":"May 15, 2024",
        "description": "The ACM at the Oriental Institute of Science and Technology is hosting a Generative AI event on May 15, 2024. This event will feature expert presentations, panel discussions, and networking sessions focused on the latest advancements, applications, and future trends in Generative AI. It aims to foster collaboration and innovation, providing a platform for sharing knowledge and exploring the impact of Generative AI on various industries.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Generative AI event on May 15, 2024. This event will feature expert talks, panel discussions, and networking opportunities centered around the advancements and applications of Generative AI. It aims to bring together professionals and enthusiasts to foster collaboration and innovation in the AI community."
      },
      {
        "short": "blockchain",
        "title": "Blockchain Innovations: ACM Symposium at Oriental Institute of Science and Technology",
        "date":" May 8, 2024",
        "description": "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Blockchain technology on the 8th of May, 2024. This event will gather experts, researchers, and enthusiasts to discuss the latest innovations, applications, and future directions of Blockchain technology. Attendees will benefit from insightful presentations, engaging panel discussions, and valuable networking opportunities. The event aims to promote collaboration and knowledge sharing, highlighting the transformative impact of Blockchain across various sectors.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Blockchain event on May 8, 2024. The event will feature expert talks, panel discussions, and networking sessions centered around the latest innovations and applications of Blockchain technology. It aims to bring together professionals and enthusiasts to foster collaboration and highlight the transformative potential of Blockchain."
      },
      {
        "short": "git",
        "title": "Mastering Git: ACM Workshop at Oriental Institute of Science and Technology",
        "date":"June 3, 2024",
        "description": "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Git on the 3rd of June, 2024. This workshop will provide an in-depth overview of Git, a popular version control system, aimed at students, developers, and professionals. Attendees will learn about Git’s core concepts, commands, and workflows through interactive sessions and practical demonstrations. The event aims to enhance participants' understanding of Git, enabling them to manage and collaborate on projects more effectively.",
        "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Git workshop on June 3, 2024. The workshop will offer an in-depth overview of Git, covering core concepts, commands, and workflows. It aims to help students, developers, and professionals enhance their understanding and use of Git for effective project management and collaboration."
      }
    ]
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {
          data.events.map((short, i) => (
            short.short !== params.slug ?
              <div key={i}>
              </div> :
              <div key={i}>
                <dl key={i} className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                  
                  <Card className=" shadow-2xl rounded-xl bg-cover relative z-0 transition-all duration-300 hover:scale-105">
                    <Image width={500} height={200} src={`/${params.slug}.jpg`} alt="image description" className='w-full h-full' quality={100} />
                    <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2">
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                  </Card>
                  <div>
                    <h2 className="font-bold text-2xl ">{short.title}</h2>
                    <p>{short.date}</p>
                    <div className='pb-8'>  <Separator /></div>
                  
                    <h2 className="text-xl">{short.description}</h2>
                  </div>
                </dl>
              </div>
          ))
        }
      </div>
    </>
  )
}
export default slug