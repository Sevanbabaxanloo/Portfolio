import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import futurest from "../assets/futurest.jpg";
import netflix from "../assets/netflix.jpg";
import todo from "../assets/todo.jpg";
import web3 from "../assets/web-3.jpg";

const Projects = () => {
  const object = [
    {
      text: "Futurest-web.com",
      img: futurest,
      link: "https://futurest-web.netlify.app/",
    },
    {
      text: "Netflix-web.com",
      img: netflix,
      link: "https://netflix-web-application.netlify.app/",
    },
    {
      text: "todo-web.com",
      img: todo,
      link: "https://todo-applists.netlify.app/",
    },
    {
      text: "Group chat-web.com",
      img: todo,
      link: "https://chat-app-singin.netlify.app/",
    },
    {
      text: "Project.com",
      img: web3,
      link: "",
    },
    {
      text: "web3-web.com",
      img: web3,
      link: "https://web-333.netlify.app/",
    },
  ];
  return (
    <div
      id="Projects"
      className="w-screen flex items-center justify-center pt-[200px] padding"
    >
      <div className="flex flex-col items-center justify-center gap-[64px]">
        <div className="text-center flex flex-col gap-[32px]">
          <div>
            <h2 className="text-[#D9D9D9] text-[2.222vw] font-[700] font-[Montserrat] tracking-[3.84px] uppercase h1-project">
              Projects
            </h2>
          </div>
          <div className="w-[55.556vw] width">
            <p className="text-[#E8FFF7] text-[1.25vw] font-[300] font-[Montserrat] tracking-[0.36px] text-project">
              Explore my portfolio to see the projects I've been working on. I'm
              eager to contribute my skills, learn from experienced
              professionals, and be a part of exciting projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[2.5vw] w-fit">
          {object.map((item, index) => (
            <div
              key={index}
              className={`bg-cover bg-center ${
                index === 2 || index === 3
                  ? "custom-size"
                  : "w-[20vw] rounded-[2.1vw] project-items h-[25.5vh] max-lg:h-[20vh]"
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-end relative h-full"
              >
                <div className="bg-[#222222] w-full h-[3vw] absolute bottom-0 rounded-b-[2vw] haight-size">
                  <div className="flex items-center justify-center gap-[0.764vw] w-full h-full">
                    <p className="text-[#fff] text-[1.042vw] font-[Montserrat] font-[500] text-project-link">
                      {item.text}
                    </p>
                    <MdOutlineOpenInNew className="text-[#fff] text-[1.111vw] text-project-link" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
