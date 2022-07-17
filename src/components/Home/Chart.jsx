import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

export default function Chart() {
  return (
    <div id="chart" className="space-y-2 p-6 w-full bg-white rounded-xl lg:absolute lg:left-8">
      <div className="flex justify-between">
        <p>Chart: Top 50</p>
        <div className="flex justify-between items-center w-16 lg:mr-24">
          <FaLessThan />
          <FaGreaterThan />
        </div>
      </div>
      <div id="chartBox" className="flex gap-20 justify-between items-center overflow-x-scroll px-1 py-3">
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
    <div className="max-w-fit basis-40 shrink-0 grow-0 p-4 space-y-1 font-light text-xs border-2 rounded-md border-orange-200 hover:shadow-md shadow-slate-300">
      <div>
        <img src="http://filmmusicreporter.com/wp-content/uploads/2018/05/mosaic.jpg" alt="albumImage" width={100} className="rounded-xl " />
      </div>
      <p>Al Music Genre</p>
      <p className="text-xs text-gray-400">Top 50</p>
    </div>
  );
};
