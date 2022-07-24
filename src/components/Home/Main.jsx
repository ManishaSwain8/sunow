import React from "react";
import mainObject from "../../utils/Main";
// import Chart from "./Chart";
// import ListeningHistory from "./ListeningHistory";
// import RecentPlay from "./RecentPlay";

function OverflowXScroll({ item }) {
  return (
    //  grow-1
    <div className="scroll-smooth snap-always snap-start shrink-0">
      <img alt="unsplash" src={item.image_url} className="w-52 rounded-lg" />
      <div>
        <p className="font-bold">{item.music_name}</p>
        <h5>{item.album_name}</h5>
      </div>
    </div>
  );
}

export default function Main() {
  // console.log(mainObject);
  const url =
    "https://media-exp1.licdn.com/dms/image/C5603AQHx3Gr967qhCA/profile-displayphoto-shrink_200_200/0/1557755310143?e=2147483647&v=beta&t=2ISmbVC3cK0Us_LfzRlQS66wLVpAgS07kWn8peYPnFw";

  const overflowXScroll = mainObject.map((item, index) => <OverflowXScroll item={item} key={index} />);
  return (
    <>
      <section id="screen" className="">
        <div id="top-nav" className="h-14 flex items-center justify-end px-6">
          <img src={url} alt="profile" className="w-12 h-12 bg-white rounded-full" />
          <div className="hidden sm:block">
            <h3>Krishna Nayak</h3>
            <h5>Premium</h5>
          </div>
        </div>
      </section>

      <div className="">
        {/*  */}
        <section id="player-list" className="lg:flex h-screen justify-between">
          {/* main Screen */}
          <div className="space-y-2 xl:basis-[70%] basis-[65%] flex-none shrink-1 grow-1 overflow-y-scroll">
            <div className="max-h-fit  p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16 gap-10 items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div>

            <div className="max-h-fit  p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16  gap-10  items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div>

            <div className="max-h-fit  p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16 gap-10  items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div>
          </div>
          {/* Player Screen */}
          <div class="basis-full shrink-1 grow-1 lg:block hidden relative h-screen px-6 py-12 overflow-hidden">
            <div id="recent-player" class="bg-blue-400 mx-auto max-w-xl min-w-[300px] aspect-[1/1.2] rounded-lg"></div>
            <div id="recent-player" class="bg-blue-200 mx-auto max-w-xl min-w-[300px] aspect-[1/1.2] h-screen-length overflow-y-scroll">
              <div id="box"></div>
              <div id="box"></div>
            </div>
          </div>
          <div class="bg-gray-800 w-full h-16 lg:hidden fixed bottom-0"></div>
        </section>
      </div>
    </>
  );
}
