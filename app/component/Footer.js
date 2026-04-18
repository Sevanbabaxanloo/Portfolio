import React from "react";
import { BsEnvelope } from "react-icons/bs";

const Github = "/linkedin.svg";
const Linkedin = "/github.svg";
const certificate = "/basic.pdf";
const btn = "/btn.svg";
const cv = "/sevan_babakhanloo_cv.pdf";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="w-full h-[409px] flex flex-col items-center justify-center mt-[100px] py-[32px] bg-[#222] max-md:mt-0 max-md:py-[60px] max-md:px-[24px] max-sm:h-[450px]"
    >
      <div className="global-padding text-center flex flex-col items-center gap-[32px] max-md:w-full">
        <div>
          <h2 className="text-[#fff] text-[23.5px] font-[700] font-Poppins tracking-[0.5px] max-md:tracking-[2.4px] max-md:text-[20px]">
            Contact
          </h2>
        </div>
        <div className="w-[676px] max-md:w-full">
          <p className="text-[var(--p-text)] text-[14px] font-[300] tracking-[0.28px] font-Poppins max-md:text-[16px] max-md:tracking-[0.32px]">
            If you're looking for a passionate and dedicated frontend developer,
            I'd love to connect! Let's build the future of the web together.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <BsEnvelope className="text-[#C5C5C5] text-[16px] mail-text-size" />
          <p className="text-[#C5C5C5] text-[14px] font-[600] font-Poppins tracking-[0.28px] mail-text-size">
            sevanbabakhanloo@gmail.com
          </p>
        </div>
        <div className="w-full flex justify-between items-center max-md:w-[160px] max-md:mb-0 max-md:flex-col max-md:gap-[16px] max-md:w-[200px]">
          <p>
            <a href={cv} download="cv.pdf"
              className="text-gradient tracking-[1.6px] text-[20px] font-[700] font-[orbitron] leading-4">Download CV</a> 
          </p>
          <p>
            <a
              href={certificate}
              download="certificate.pdf"
              className="text-gradient tracking-[1.6px] text-[20px] font-[700] font-[orbitron] leading-4">
                Certificate
            </a>
          </p>
          <p>
            <a href="mailto:sevanbabakhanloo@gmail.com" className="text-gradient tracking-[1.6px] text-[20px] font-[700] font-[orbitron] leading-4">
              Get in Touch
            </a>
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