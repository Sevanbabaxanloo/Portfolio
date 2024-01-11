import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import futurest from "../assets/futurest.jpg";
import netflix from "../assets/netflix.jpg";
import todo from "../assets/todo.jpg";
import web3 from "../assets/web-3.jpg";
import gp from "../assets/group-chat.jpg";

const Projects = () => {
  const object = [
    {
      text: "Futurest-web.com",
      img: futurest,
      link: "https://futurest-web.netlify.app/",
      orderClass: "order-1 max-md:order-1",
    },
    {
      text: "Netflix-web.com",
      img: netflix,
      link: "https://netflix-web-application.netlify.app/",
      orderClass: "order-2 max-md:order-3",
    },
    {
      text: "todo-web.com",
      img: todo,
      link: "https://todo-applists.netlify.app/",
      orderClass: "order-3 max-md:order-2",
    },
    {
      text: "chat-web.com",
      img: gp,
      link: "https://chat-app-singin.netlify.app/",
      orderClass: "order-4 max-md:order-5",
    },
    {
      text: "Project.com",
      img: web3,
      link: "",
      orderClass: "order-5 max-md:order-6",
    },
    {
      text: "web3-web.com",
      img: web3,
      link: "https://web-333.netlify.app/",
      orderClass: "order-6 max-md:order-4",
    },
  ];
  return (
    <div
      id="Projects"
      className="w-full h-screen flex items-center justify-center max-md:py-[60px] max-md:px-[24px] max-md:h-content max-sm:h-content haight-container"
    >
      <div className="flex flex-col items-center justify-center gap-[64px] max-md:w-full max-sm:gap-[32px]">
        <div className="w-full text-center flex flex-col items-center gap-[32px]">
          <div>
            <h2 className="text-[#D9D9D9] text-[32px] font-[700] font-[Montserrat] tracking-[3.84px] uppercase max-md:text-[24px] max-md:tracking-[2.88px]">
              Projects
            </h2>
          </div>
          <div className="w-[760px] max-md:w-full">
            <p className="w-full text-[#E8FFF7] text-[18px] font-[300] font-[Montserrat] tracking-[0.36px] max-md:text-[16px]">
              Explore my portfolio to see the projects I've been working on. I'm
              eager to contribute my skills, learn from experienced
              professionals, and be a part of exciting projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[16px] w-fit max-md:w-[325px] container-size container-grid">
          {object.map((item, index) => (
            <div
              key={index}
              className={`bg-cover bg-center ${item.orderClass} ${
                index === 2 || index === 3
                  ? "small-size custom-size max-lg:w-[181px] max-lg:h-[151px] max-md:w-[115px] max-md:h-[103px] max-md:rounded-[22px]"
                  : "small-size w-[287px] h-[258px] rounded-[41px] project-items max-lg:w-[237px] max-lg:h-[208px] max-md:w-[155px] max-md:h-[140px] max-md:rounded-[22px]"
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-end relative h-full"
              >
                <div className="bg-[#222222] w-full h-[50px] absolute bottom-[-1px] rounded-b-[41px] haight-size max-lg:h-[40px] max-md:rounded-b-[22px]">
                  <div className="flex items-center justify-center gap-[11px] w-full h-full">
                    <p className="text-[#fff] text-[14px] font-[Montserrat] font-[500] max-md:text-[10px]">
                      {item.text}
                    </p>
                    <MdOutlineOpenInNew className="text-[#fff] text-[1.111vw] " />
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
