import React from "react";
import js from "../img/js.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import node from "../img/node.png";
import vscode from "../img/vscode.png";
import figma from "../img/figma.png";
import { useSelector } from "react-redux";
const Skills = () => {
  const darkMode = useSelector(state => state.darkMode)
  return (
    <div className={`w-full ${darkMode ? "bg-[#484148]": "bg-white"} `} >
      <div className="flex flex-col items-center pb-30 pt-30  lg-[.5rem] lg:px[0rem]  lg:h-[25rem] ">
        <h3 className="text-[3rem] lg:text-[3rem] font-['Inter'] font-[500]  lg:leading-[98.09px] lg:tracking-[0.01em]">
          Skills
        </h3>
        <br></br>
        <div className="flex flex-wrap flex-col gap-12 lg:flex-row">
          <div className="icon-div">
            <img src={js} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={react} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={redux} alt="" className="program-icon" />
          </div>

          <div className="icon-div">
            <img src={node} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={vscode} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={figma} alt="" className="program-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
