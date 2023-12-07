import React from "react";

import { useSelector } from "react-redux";
const Skills = () => {
  const darkMode = useSelector(state => state.darkMode)
  const skills = useSelector(state=> state.skillsData)
  return (
    <div className={`w-full ${darkMode ? "bg-[#484148] text-white": "bg-white"} `} >
      <div className="flex flex-col items-center pb-30 pt-30  lg-[.5rem] lg:px[0rem]  lg:h-[25rem] ">
        <h3 className="text-[3rem] lg:text-[3rem] font-['Inter'] font-[500]  lg:leading-[98.09px] lg:tracking-[0.01em]">
         {skills[0].skillHeader}
        </h3>
        <br></br>
        <div className="flex flex-wrap flex-col gap-12 lg:flex-row">
          <div className="icon-div">
            <img src={skills[0].imageJs} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={skills[0].imageReact} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={skills[0].imageRedux} alt="" className="program-icon" />
          </div>

          <div className="icon-div">
            <img src={skills[0].imageNode} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={skills[0].imageVs} alt="" className="program-icon" />
          </div>
          <div className="icon-div">
            <img src={skills[0].imageFigma} alt="" className="program-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
