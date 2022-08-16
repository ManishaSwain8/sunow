import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

export default function Chart() {
  return (
    <div id="chart" className="p-5 bg-white rounded-xl lg:h-full">
      <div className="flex justify-between">
        <h1>Chart: Top 50</h1>
        <div className="flex justify-between items-center w-16 lg:mr-24">
          <FaLessThan />
          <FaGreaterThan />
        </div>
      </div>
      <div
        id="chartBox"
        className="flex gap-20 justify-between items-center overflow-x-scroll px-1 py-3 h-full"
      >
        {/* box */}
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
        <Top50Box />
      </div>
    </div>
  );
}

const Top50Box = () => {
  return (
    <div className="basis-32 md:basis-40 shrink-0 grow-1 p-4 space-y-1 font-light text-xs border-2 rounded-md border-orange-200 hover:shadow-md shadow-slate-300">
      <div>
        <img
          src="http://filmmusicreporter.com/wp-content/uploads/2018/05/mosaic.jpg"
          alt="albumImage"
          className="rounded-xl w-full"
        />
      </div>
      <p>Al Music Genre</p>
      <p className="text-xs text-gray-400">Top 50</p>
    </div>
  );
};
