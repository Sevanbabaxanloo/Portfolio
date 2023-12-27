import React from "react";
const Animation = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-[var(--bg-color)]">
      <div className="animation-text flex justify-center align-center">
        <h1 className="animation-in animation-text">S</h1>
        <h1 className="animation-down animation-text">E</h1>
        <h1 className="animation-up animation-text">V</h1>
        <h1 className="animation-down animation-text">A</h1>
        <h1 className="animation-UpIn animation-text">N</h1>
      </div>
    </div>
  );
};
export default Animation;
