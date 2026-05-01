import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";

const Projects = () => {
  const object = [
    {
      text: "Futurest-Web.com",
      img: "/futurest.jpg",
      link: "https://futurest-web.netlify.app/",
      githubLink: "https://github.com/Sevanbabaxanloo/Futurest-web",
        git: "Github",
        descriptions: "Social networking landing page built for a real client in the Czech Republic. Built with React & CSS."
    },
    {
      text: "Portfolio-Web.com",
      img: "/Portfolio.jpg",
      link: "https://ui-ux-portfolioo.netlify.app/",
      githubLink: "https://github.com/Sevanbabaxanloo/Ui-Ux-Portfolio/tree/master",
      git: "Github",
      descriptions: "UI/UX designer portfolio showcasing creative work and services. Built with React & Tailwind CSS."
    },
    {
      text: "web3-web.com",
      img: "/web-3.jpg",
      link: "https://web-333.netlify.app/",
      githubLink: "https://github.com/Sevanbabaxanloo/Web-3",
      git: "Github",
      descriptions: "NFT project launch agency site with bold visual design. Built with React & Tailwind CSS."
    },
    {
      text: "Todo-Web.com",
      img: "/todo.jpg",
      link: "https://todo-applists.netlify.app/",
      githubLink: "https://github.com/Sevanbabaxanloo/Todo-app/tree/master",
      git: "Github",
      descriptions: "Task manager app with add, edit, delete and complete functionality. Built with React & local state."
    },
  ];

  return (
    <div
      id="Projects"
      className="global-margin w-full min-h-[1024px] flex items-center justify-center px-6 py-16"
    >
      <div className="global-padding w-full flex flex-col items-center gap-16">
        <div className="w-full text-center flex flex-col items-center gap-8">
          <h2 className="text-[#D9D9D9] text-[32px] font-[700] font-montserrat tracking-[3.84px] uppercase max-md:text-[24px] max-md:tracking-[2.88px]">
            Projects
          </h2>
          <div className="w-full max-w-[760px]">
            <p className="w-full text-[#E8FFF7] mb-[68px] text-[18px] font-[300] font-montserrat tracking-[0.36px] max-md:text-[16px]">
              Explore my portfolio to see the projects I've been working on. I'm
              eager to contribute my skills, learn from experienced professionals,
              and be a part of exciting projects.
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-[920px] grid-cols-2 gap-[28px] justify-items-center max-lg:w-[700px] max-md:w-[91.146vw] max-sm:grid-cols-1">
          {object.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-[12px]">
              <div className="w-full h-[280px] rounded-[41px] bg-cover bg-center overflow-hidden max-lg:h-[208px] max-md:h-[240px] max-md:rounded-[22px] max-sm:h-[300px] relative" style={{ backgroundImage: `url(${item.img})` }}>
                <div className="bg-[#222222] w-full h-[50px] absolute bottom-[-1px] rounded-b-[41px] max-lg:h-[40px] max-md:rounded-b-[22px] max-sm:h-[60px] z-20">
                  <div className="flex items-center justify-center gap-[16px] w-full h-full px-[8px]">
                    <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-[6px]">
                     <p className="text-[#fff] text-[14px] font-montserrat font-[500] max-md:text-[10px] truncate">
                       {item.text}
                     </p>
                      <MdOutlineOpenInNew className="text-[#fff] text-[15px] shrink-0" />
                    </a>
                      {item.githubLink && <span className="text-[#666] text-[14px]">|</span>}
                      {item.githubLink && (
                      <a href={item.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-[6px]">
                        <p className="text-[#fff] text-[14px] font-montserrat font-[500] max-md:text-[10px]">
                          {item.git}
                        </p>
                        <MdOutlineOpenInNew className="text-[#fff] text-[15px] shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
                <p className="text-[#aaa] text-[14px] font-montserrat font-[300] leading-relaxed text-center px-[8px] max-md:text-[12px] max-sm:text-[18px]">
                  {item.descriptions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Projects;