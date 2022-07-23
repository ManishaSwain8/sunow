import React from "react";
import Chart from "./Chart";
import ListeningHistory from "./ListeningHistory";
import RecentPlay from "./RecentPlay";

export default function Main() {
  return (
    // FIXME: Change height not in screen size 100vh !!!
    <div className="sm:px-8 p-3 md:overflow-hidden w-full  relative space-y-3 h-full">
      {/* Sreen HEad */}
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">
          Discover <span>{">"}</span> <span className="text-gray-400">Recently Played</span>
        </p>
        <div className="flex gap-3 ">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHx3Gr967qhCA/profile-displayphoto-shrink_200_200/0/1557755310143?e=2147483647&v=beta&t=2ISmbVC3cK0Us_LfzRlQS66wLVpAgS07kWn8peYPnFw"
            alt="profile"
            width={50}
            className="rounded"
          />
          <div className="flex flex-col justify-around min-h-full">
            <p className="text-sm">Krishna Nayak</p>
            <p className="text-xs font-light text-gray-400">Premium</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="min-h-[280px] sm:w-full">
        <Chart />
      </div>

      {/* Listening History */}
      <div className="flex gap-10 relative border-2 ">
        <ListeningHistory />
        <RecentPlay />
      </div>
    </div>
  );
}
