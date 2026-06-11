import React from "react";
import AICHAT_Pdf from "../assets/AICHAT_Pdf.png";
import gemini from "../assets/gemini.png";

const ProjectCard = () => {
  let data = [
    {
      img: AICHAT_Pdf,
      heading: "AI Chat PDF",
      description: "Chat with your PDF and get instant answers to your QAs.",
      vercel: "https://ai-pdf-chat-zk38.vercel.app/",
      github: "https://github.com/rajpal-singh-code/AI-PDF-Chat",
    },
    {
      img: gemini,
      heading: "SkillSnap-AI",
      description: "Real Time Gemini keys using for text generate",
      vercel: "https://ai-pdf-chat-jug8.vercel.app/",
      github: "https://github.com/rajpal-singh-code/SkillSnap-AI",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-900 px-4 py-3 rounded-xl h-auto w-full md:w-90 lg:w-120 mb-4"
        >
          <div className="h-fit w-full overflow-hidden rounded-t-xl">
            <img
              src={item.img}
              alt={item.heading}
              className="object-cover hover:scale-110 transition-all ease-in-out"
            />
          </div>
          <div>
            <h1 className="py-2 text-3xl font-semibold font-sans">
              {item.heading}
            </h1>
            <p className="text-lg opacity-70">{item.description}</p>
            <div className="flex gap-5 py-2.5">
              <a
                className="border px-3.5 rounded text-lg py-1.4 font-normal"
                href={item.vercel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-global-line"></i> Preview
              </a>
              <a
                className="border px-3.5 rounded text-lg py-1.4 font-normal"
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
