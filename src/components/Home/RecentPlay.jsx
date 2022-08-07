import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";

export default function RecentPlay() {
  return (
    <div className="basis-80 grow-1 self-stretch max-h-[500px] md:block hidden relative">
      <div className="bg-[#e2e2f2] w-full h-full shadow-xl rounded-2xl p-4 text-center">
        <div className="flex flex-col h-full justify-around">
          <div className="max-w-xs mx-auto">
            <img src="https://i1.sndcdn.com/artworks-3ITTy648eljqFP3e-LGDfnQ-t500x500.jpg" alt="heatwave" className="mx-auto rounded-2xl" width={250} />
            {/* <img src="https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png" alt="heatwave" className="mx-auto rounded-2xl w-full" width={300} /> */}
          </div>
          {/* <div className="mt-2"> */}
          <div>
            <h1>Heat Waves</h1>
            <h4>glass animals</h4>
          </div>
          <div className="relative mt-2">
            <div className="w-full border-2"></div>
            <div className="w-1/2 border-2 border-orange-400 absolute top-0"></div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>1:21</span>
              <span>4:21</span>
            </div>
          </div>

          <div className="flex items-center justify-evenly mt-2">
            <GiPreviousButton size={20} color="rgb(251 146 60)" />
            <GiFastBackwardButton size={20} color="rgb(251 146 60)" />
            <BsFillPlayCircleFill size={40} color="rgb(251 146 60)" className="shadow-2xl shadow-slate-600" />
            <GiFastForwardButton size={20} color="rgb(251 146 60)" />
            <GiNextButton size={20} color="rgb(251 146 60)" />
          </div>
        </div>
      </div>
    </div>
  );
}
