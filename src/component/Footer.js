import React from "react";
import { BsEnvelope } from "react-icons/bs";
import Github from "../assets/linkedin.svg";
import Linkedin from "../assets/github.svg";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="w-screen h-[30vh] flex flex-col items-center justify-center mt-[64px] bg-[#222]"
    >
      <div className="text-center flex flex-col gap-[32px] padding-footer">
        <div>
          <h2 className="text-[#fff] text-[1.597vw] font-[700] font-[Poppins] h1-footer">
            Contact
          </h2>
        </div>
        <div className="w-[46.944vw] width">
          <p className="text-[#C5C5C5] text-[0.972vw] font-[300] font-[Poppins] email-text">
            If you're looking for a passionate and dedicated frontend developer,
            I'd love to connect! Let's build the future of the web together.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <BsEnvelope className="text-[#C5C5C5] text-[1.2vw] email-text" />
          <p className="text-[#C5C5C5] text-[1.042vw] font-[600] font-[Poppins] tracking-[1px] email-text">
            sevanbabakhanloo@gmail.com
          </p>
        </div>
        <div className="flex flex-row justify-center gap-[18px]">
          <a
            href="https://github.com/Sevanbabaxanloo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github" className="w-[24px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sevan-babakhanloo-2094a728a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" className="w-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
