// import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator"

const projects = ({ params }: { params: { slugs: string } }) => {
  const data = {
    projects: [
      {
        short: "offAcmWebSite",
        title:
          "Oriental institute of science and technology ACM Student Chapter Website",
        date: "xx xx, 20xx",
        description:
          "This repository manages the source code for the website of the Oriental institute of science and technology Association for Computing Machinery (ACM) Student Chapter. Here, you'll find everything you need to",
        summary: {
          point1:
            "This website serves as a central hub for the Oriental institute of science and technology ACM Student Chapter, providing information about our events, resources, and opportunities for computer science students.",
          point2:
            "This website aims to connect students passionate about computing at Oriental institute of science and technology, fostering a vibrant community and promoting professional development.",
        },
        link: {
          gitHubRepo: "https://github.com/Nev-Labs/ACM_OIST",
          webLink: "https://acm-oist.vercel.app/",
        },
      },
      {
        short: "lightUi",
        title:
          "Light UI: A lightweight user interface for interacting with local Large Language Models (LLMs).",
        date: " xx x, 20xx",
        description:
          "This repository provides a user-friendly interface to interact with various LLM models running on your local machine.It offers a simple and efficient way to 'Execute LLM inferences' ",
        summary: {
          point1:
            "It provides a simple and efficient way to send prompts and queries to your LLMs, receiving text,code, or other outputs as results",
          point2: "Supported LLM backends- Ollama",
        },
      },
      {
        short: "debugOffWebSite",
        title: "Website for the club Debug",
        date: "xx x, 20xx",
        description:
          "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Git on the 3rd of June, 2024. This workshop will provide an in-depth overview of Git, a popular version control system, aimed at students, developers, and professionals. Attendees will learn about Git’s core concepts, commands, and workflows through interactive sessions and practical demonstrations. The event aims to enhance participants' understanding of Git, enabling them to manage and collaborate on projects more effectively.",
        summary:
          "The ACM at the Oriental Institute of Science and Technology is organizing a Git workshop on June 3, 2024. The workshop will offer an in-depth overview of Git, covering core concepts, commands, and workflows. It aims to help students, developers, and professionals enhance their understanding and use of Git for effective project management and collaboration.",
      },
    ],
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        
          {data.projects.map((short, i) =>
            short.short !== params.slugs ? (
              <div key={i}></div>
            ) : (
              <div key={i}>
                <dl
                  key={i}
                  className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10"
                >
                  <Card className=" shadow-2xl rounded-xl bg-cover relative z-0 transition-all duration-300 hover:scale-105">
                    <Image
                      width={500}
                      height={200}
                      src={`/${params.slugs}.png`}
                      alt="image description"
                      className="w-full h-full"
                      quality={100}
                      />
                    {/* <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2"></CardHeader> */}
                    {/* <CardContent></CardContent> */}
                  </Card>
                  <div>
                    <h2 className="font-bold border-gray-50 text-2xl pb-2 border-b-2 ">{short.title}</h2>
                    <p className="mt-2">{short.date}</p>
                    {/* <div className='pb-8'>  <Separator /></div> */}

                    <h2 className="text-xl mt-2">{short.description}</h2>
                  </div>
                </dl>
              </div>
            )
          )}
       

        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10"></dl>
        </div>
      </div>
    </div>
  );
};
export default projects;
