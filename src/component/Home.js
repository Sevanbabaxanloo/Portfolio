import React from "react";
import Typed from "react-typed";
import emoji from "../assets/image.svg";
import btn from "../assets/btn.svg";
import btn1 from "../assets/btn1.svg";
import basic from "../assets/basic.pdf";

const Home = () => {
  const contact = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="Home"
      className="w-screen flex items-center justify-center pt-[5vh] padding-top"
    >
      <div className="flex flex-col items-center gap1">
        <div className="bg-gradient-circle flex flex-col items-center justify-center gap-[64px] rounded-full img-size">
          <div className="flex justify-center items-center w-[14.792vw] h-[14.792vw] rounded-full bg-gradient img-size">
            <img className="min-w-full" src={emoji} />
          </div>
        </div>
        <div className="relative ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-[3.16vh] gap">
              <div className="w-[44vw] container-size">
                <h1 className="text-[var(--text)] text-[3.819vw] font-bold font-[Montserrat] h1-text">
                  I do code and guess what?
                  <Typed
                    className="pl-[10px] text-gradient"
                    strings={["I start it!", "I practice It!", "I loved it!"]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  ></Typed>
                </h1>
              </div>
              <div className="w-[55.556vw] container-size text-center width">
                <p className="font-[Montserrat] font-[300] text-[var(--p-text)] text-[1.25vw] text-home">
                  Hello, I'm Sevan Babakhanloo , a budding frontend developer
                  eager to make a mark in the digital realm.
                </p>
              </div>
              <div className="flex flex-row items-flex-start">
                <div className="flex gap-[2.37vw]">
                  <button
                    onClick={() => contact("Contact")}
                    className="w-[11.25vw] button-size"
                  >
                    <img src={btn} />
                  </button>
                  <button className="w-[11.25vw] button-size">
                    <a href={basic} download={"basic.pdf"}>
                      <img src={btn1} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;