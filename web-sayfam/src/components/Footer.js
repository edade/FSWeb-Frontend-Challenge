import { useSelector } from "react-redux";
export default function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      className={
        `flex justify-center lg:w-[98.7vw] pb-[3rem] gap-[2rem] xl:gap-[5.8rem] lg:px-[14.8rem] pt-[1rem] lg:pt-[6rem] ${darkMode ? "bg-[#484148] text-white" : ""}`
      }
    >
      <div>
        <p className="xl:text-[2.5rem] font-['Inter'] font-[500] pt-[1rem] xl-[0rem] xl:leading-[6.3rem] tracking-[0.01em] text-right">
          Let's work together on
          <span>
            <div className="lg:w-[10rem] lg:pr-6 w-[5rem] mt-[-.6rem] ml-[3.1rem] mb-[-1.5rem] h-[.4rem] lg:h-[1.8rem] bg-[#82BBFF] rounded-[.4rem] lg:ml-[13rem] lg:mb-[-6.1rem] lg:mt-[-2.6rem]"></div>
          </span>
          <br /> your next product.
        </p>
      </div>
      <div>
        <a target="_blank" href="https://github.com/edade">
          <p className="xl:text-[2rem] text-[#1769FF] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]">
            Github
          </p>
        </a>
        <a target="_blank" href="https://github.com/edade"></a>
        <p className="xl:text-[2em] text-[#0A0A14] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]">
          Personal Blog
        </p>
        <a target="_blank" href="https://www.linkedin.com/in/eda-kalaycioglu/">
          <p className="xl:text-[2rem] text-[#0077B5] text-left xl:leading-[3rem] font-['Inter'] font-[500]">
            LinkedIn
          </p>
        </a>
        <a target="_blank" href="mailto:edakalaycioglu@gmail.com">
          <p className="lg:text-[2rem] text-[#AF0C48] text-left lg:leading-[3rem] font-['Inter'] font-[500]">
            Email
          </p>
        </a>
      </div>
    </div>
  );
}
