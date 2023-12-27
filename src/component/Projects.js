import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import contact from "../assets/contact.svg";
import Rectangle from "../assets/Rectangle.svg";

const Projects = () => {
  const object = [
    {
      text: "Project 1.com",
      img: Rectangle,
    },
    {
      text: "Project 2.com",
      img: Rectangle,
    },
    {
      text: "Project 3.com",
      img: Rectangle,
    },
    {
      text: "Project 4.com",
      img: Rectangle,
    },
    {
      text: "Project 5.com",
      img: Rectangle,
    },
    {
      text: "Project 6.com",
      img: Rectangle,
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
              className={index === 2 || index === 3 ? "custom-size" : ""}
            >
              <a
                href="/"
                target="_blank"
                className="flex flex-col items-end relative"
              >
                <img
                  src={item.img}
                  alt={`Project ${index + 1}`}
                  className="w-[19.931vw] project-items"
                />
                <div className="bg-[#222222] w-full h-[3vw] absolute bottom-0 rounded-b-[2vw] haight-size">
                  <div className="flex items-center justify-center gap-[0.764vw] h-full">
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
        <div>
          <button className="button-project">
            <img src={contact} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Projects;
