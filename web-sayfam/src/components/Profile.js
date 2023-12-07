import { useSelector } from "react-redux";

export default function Profile() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={`
 py-[2rem] lg:py-[7.2rem] lg:pl-[19.3rem] px-[2rem] lg:pr-[21.6rem] ${
   darkMode ? "bg-[#2A262B] text-[white]" : "bg-[#F4F4F4]"
 }`}
    >
      <div className="flex  flex-col justify-center items-center">
        <p className="font-['Inter']  font-[500] lg:pl-[1.7rem] text-[3rem] pb-[1rem] lg:pb-[0rem] tracking-[0.1rem] leading-[4.357rem]">
          Profile
        </p>

        <div className="flex pt-[3rem]  lg:flex-row  flex-col ">
          <div className={`flex  w-[50%] h-[25rem] flex-col pt-[2rem] lg:pt-[2rem] pl-[1rem] lg:pl-[3rem] lg:pr-[3rem] lg:ml-[5rem] lg:bg-white rounded-[1.2rem] lg:shadow-[9px_9px_0px_rgba(82,82,82,0.5)] ${darkMode ? "lg:bg-[#525252]" : ""}`}>
            <p className="font-['Playfair_Display']  text-left  font-[400] text-[#d9333b] lg:text-[#EA2678] leading-[3.2rem] text-[24px] ">
              Basic Information
            </p>
            <div className="flex flex-col text-left  pt-[0.5rem]">
              <div className="flex ">
                <p
                  className={
                    "text-[1.2rem] font['Inter'] w-[38%] lg:m-0 lg:p-0 lg:pr-[1.5rem] lg:w-[40%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                  }
                >
                  Birthdate
                </p>
                <p className="text-[1.2rem] font-['Inter'] w-[70%]  font-[400] leading-[2.178rem] tracking-[0.01rem]">
                  13.11.1998
                </p>
              </div>

              <div className="flex pt-[0.5rem]">
                <p className="text-[1.2rem] font['Inter'] lg:pr-[1.5rem] lg:w-[40%] w-[39%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]">
                  Address
                </p>
                <p className="text-[1.2rem] font-['Inter'] w-[70%] font-[400] leading-[2.178rem] tracking-[0.01rem]">
                  Üsküdar/Istanbul
                </p>
              </div>
              <div className="flex pt-[0.5rem] w-[25rem]">
                <p className="text-[1.2rem] font['Inter'] lg:pr-[1.5rem] lg:w-[40%] w-[25%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]">
                  Education
                </p>
                <p className="text-[1.2rem] font-['Inter'] w-[70%] font-[400] leading-[2.178rem] tracking-[0.01rem]">
                  Kadir Has University-Computer Engineering, 2022
                </p>
              </div>
              <div className="flex pb-[3rem]">
                <p className="text-[1.2rem] font['Inter'] lg:pr-[1.5rem] w-[38%] lg:w-[40%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]">
                  Preferred Role
                </p>
                <p className="text-[1.2rem] font-['Inter'] w-[70%] lg:w-[70%] font-[400] leading-[2.178rem] tracking-[0.01rem]">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[36.5vw] w-[94vw] ">
            <div className="lg:pl-[5rem] pl-[2rem] text-left pt-[3.7rem] ">
              <p className="text-[2.4rem]  font-[400] leading-[3.2rem] tracking-[0.01em] font-['Playfair_Display']">
                About me
              </p>
              <span>
                <div className="bg-[#82BBFF] w-[9rem] h-[1.8rem] rounded-[.4rem] mx-[-1.2rem] my-[-1.5rem]"></div>
              </span>
              <p className="pt-[3.4rem] font-['Inter'] font-[400] text-[1.2rem] lg:text-[1.5rem]">
                I studied at Kadir Has University in Computer Engineering
                department.
              </p>
              <p className="pt-[2.5rem] font-['Inter'] font-[400] text-[1.2rem] lg:text-[1.5rem]">
                This profile will show examples of my projects that I completed
                thanks to Workintech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
