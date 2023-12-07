import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/actions";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`flex items-center justify-end space-x-4  pt-10 ${darkMode ? "bg-[#2A262B]" : "bg-[#F4F4F4]" }`}>
      <div className="relative">
   
        <label className="flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => dispatch(toggleTheme())}
            className="hidden"
          />
          <div
            className={`${
              darkMode ? "bg-black" : "bg-[#E92577]"
            } w-[3rem] h-6 rounded-full relative transition-all duration-300 ease-in-out flex items-center justify-center`}
          >
            <div
              className={`${
                darkMode ? "left-1 bg-[#FFE86E]" : " left-7 bg-[#FFE86E]"
              }  w-4 h-4 rounded-full absolute transition-all duration-300 ease-in-out transform`}
            ></div>
          </div>
        </label>
      </div>

      <div>
        {darkMode ? (
          <p className="text-[#777777] font-['Inter']">LIGHT MODE</p>
        ) : (
          <p className="text-[#777777] font-['Inter']">DARK MODE</p>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
