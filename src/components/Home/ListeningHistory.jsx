import React from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BsHeartHalf } from "react-icons/bs";

const FloatIcon = () => (
  <div className="text-sm flex gap-5 absolute -top-5 right-10">
    <div className="flex items-center p-2 bg-white shadow-xl shadow-slate-200 rounded-xl">
      <BsFillPlayFill size={24} />
      120k
    </div>
    <div className="flex items-center p-2 bg-white shadow-xl shadow-slate-200 rounded-xl">
      <AiFillMessage size={24} />
    </div>
    <div className="flex items-center p-2 bg-white shadow-xl shadow-slate-200 rounded-xl">
      <BsHeartHalf size={24} />
    </div>
  </div>
);

const ListeningHistory = () => {
  return (
    // md:max-w-[65%]
    <div className=" md:grow-[2] w-full bg-[#FDFDFD] rounded-3xl overflow-hidden h-[55%] shadow-sm  relative">
      <div className="flex justify-between p-5 shadow-xl shadow-slate-100">
        <p>Listening History</p>
        <p className="text-gray-400 text-sm">See All</p>
      </div>
      <div className="overflow-y-auto max-h-96">
        <div className="pt-16 pb-24 flex flex-col gap-16 ">
          {/* playLsit */}
          <MusicList />
          <MusicList />
          <MusicList />
          <MusicList />
          <MusicList />
          <MusicList />
          <MusicList />
          <MusicList />
        </div>
      </div>
    </div>
  );
};

function MusicList() {
  return (
    <div className="px-3 sm:px-10 bg-white ">
      <div className="flex items-center shadow-xl shadow-slate-200 w-full mx-auto relative rounded-lg">
        <img className="rounded-lg shadow-2xl shadow-slate-700" src="https://upload.wikimedia.org/wikipedia/en/3/3e/Themusic.themusic.albumcover.jpg" alt="iamge" width={75} />
        <div className="ml-5 text-sm">
          <p>Lorem, ipsum dolor.</p>
          <p className="text-xs text-gray-400">Lorem, ipsum.</p>
        </div>

        <FloatIcon />
      </div>
    </div>
  );
}
export default ListeningHistory;
