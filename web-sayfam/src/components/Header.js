import { useSelector } from "react-redux";

export default function Header() {

  const darkMode = useSelector(state=> state.darkMode)
  const headerData = useSelector(state => state.headerData)
  return (
    <div className={`flex flex-col-reverse px-[2rem] mx-auto gap-10 lg:flex-row lg:pt-[3.5rem] lg:justify-evenly lg:pl-[10rem] lg:pr-[10rem] pb-[2rem] lg:pb-[9.4rem] ${
      darkMode ? "bg-[#2A262B] text-[white]" : "bg-[#F4F4F4]"
    }`}>
      <div className="text-left lg:pt-[0rem] lg: pt-[2rem] w-[82vw] lg:w-[60rem] lg:pr-[2rem]">
        <p className=" font-['Inter'] tracking-widest text-[2rem] leading-[4rem] lg:text-[2rem] lg:mb-[2rem] ">
          Hi! 👋
        </p>

        <p className=" font-['Inter'] lg:tracking-[.01em] font-[500] text-[2rem] lg:text-[3rem] lg:leading-[4rem]  ">
          I’m {headerData[0].name} I’m a {headerData[0].role}. I can craft solid and scalable frontend products. Let’s meet!
          <div className="flex gap-[2rem] lg:mt-[0rem] mt-[2rem]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eda-kalaycioglu/%C4%B1kg%C3%B6z-436994272/"
            >
              <img
                className="lg:mt-[5.6rem]"
                width="31"
                height="33.95"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
              />
            </a>

            <a target="_blank" href="https://github.com/edade">
              <img
                className="lg:mt-[5.6rem] "
                width="34"
                height="36.14"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
              />
            </a>
          </div>
          <p className="lg:text-[1.2rem] text-[1.1rem] lg:leading-[3.2rem] font-['Inter'] lg:tracking-wider mt-[1rem]  lg:mt-[2.5rem]">
            Currently <span className=" text-[#AF0C48]">Freelancing</span>
            <span>for </span>
            <span className=" text-[#AF0C48]">UX, UI, & Web Design</span>
            <span> Project.</span>
            <br />
            Invite me to join your team →
            <span>
              <a
                className=" text-[#AF0C48] underline underline-offset-4"
                target="_blank"
                href="mailto:edakalaycioglu@gmail.com"
              >
                {headerData[0].mail}
              </a>
            </span>
          </p>
        </p>
      </div>
      <div className="flex lg:h-[39%] lg:w-[40vw]  pl-[5.6rem] pr-[-1.4rem] lg:justify-end py-[5rem] h-[15rem] justify-center">
        <img
          className=" rounded-[2.2rem]  w-[17rem] h-[15rem] lg:w-[40rem] lg:h-[25rem]   shadow-[-1.5rem_-1.5rem_0rem_rgba(238,17,98,0.90)]"
          src={headerData[0].image}
          alt="Image"
        />
      </div>
    </div>
  );
}
