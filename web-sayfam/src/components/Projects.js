
import React from "react";
import { ProjectsData } from "../data/ProjectsData"; 
import { useSelector } from "react-redux";

const ProjectCards = () => {
  const darkMode = useSelector(state=> state.darkMode)
  return (
    <div className={`flex flex-col p-[1rem] justify-center items-center ${darkMode ? "bg-[#484148] text-white" : " " }`}>
      <div className="text-[3rem] font-['Inter'] leading-[4.357rem] font-[500] pt-[2rem] pb-[2rem]">
        Projects
      </div>

      <div className="flex space-x-8 ">
        {ProjectsData.map((project, index) => (
          <div
            key={project.id}
            className={`max-w-[22rem] flex-shrink rounded overflow-hidden shadow-md   ${ darkMode ? (index % 2 === 0 ? "bg-[#2D3235]" : "bg-[#495351]") : "bg-[#DDEEFE]" }`}
          >
            <div className="p-4 text-left">
              <h2 className="font-['Playfair_Display'] font-bold text-[1.5rem] mb-2">
                {project.projectHeader}
              </h2>
              <p className=" font-['Inter']  text-base ">
                {project.introduction}
              </p>
              <div className="mt-4">
                <div>
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={` inline-block font-['Playfair_Display'] font-[700] text-[1rem] leading-[1.6rem] rounded-[7.6rem] px-2 py-1 m-1  ${ darkMode ? "bg-[#525252]" : "bg-[#DDEEFE]" } `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between pb-7">
                <a
                  href={project.github}
                  className="font-[700] font-['Inter']"
                  target="_blank"
                >
                  Wiev on GitHub →
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    className="ml-4 font-[700] font-['Inter']"
                    target="_blank"
                  >
                    Go to App →
                  </a>
                )}
              </div>
            </div>
            <img
              src={project.image}
              alt={project.projectHeader}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
