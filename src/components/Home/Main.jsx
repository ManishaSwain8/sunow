import React from "react";
import mainObject from "../../utils/Main";
import RecentPlay from "./RecentPlay";
// import Chart from "./Chart";
// import ListeningHistory from "./ListeningHistory";
// import RecentPlay from "./RecentPlay";

import Explore from "../../Pages/Explore";
import { Link } from "react-router-dom";

// import { BsFillPlayCircleFill } from "react-icons/bs";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

  const overflowXScroll = mainObject.map((item, index) => (
    <OverflowXScroll item={item} key={index} />
  ));
  return (
    <>
      <section id="screen" className="p-0">
        <div
          id="top-nav"
          className="h-14 flex items-center justify-center px-6"
        >
          <div className="ml-auto justify-self-center">
            <Link to="/Explore">
              <Explore />
            </Link>
          </div>
          <div className="ml-auto flex justify-self-end">
            <img
              src={url}
              alt="profile"
              className="w-12 h-12 bg-white rounded-full"
            />
            <div className="hidden sm:block">
              <h3>Krishna Nayak</h3>
              <h5>Premium</h5>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-2">
        {/*  */}
        <section
          id="player-list"
          className="lg:flex justify-between h-[calc(100vh-56px)] overflow-y-hidden"
        >
          {/* main Screen */}
          <div className="space-y-2  xl:basis-[70%] basis-[65%] flex-none shrink-1 grow-1 overflow-y-scroll">
            <div className="max-h-fit my-0 p-6">
              <h2 className="font-bold text-2xl my-5">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16 gap-10 items-center overflow-x-scroll">
                  {overflowXScroll}
                </div>
              </div>
            </div>
            {/* 
            <div className="max-h-fit mt-20 p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16 gap-10 items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div> */}

            {/* <div className="max-h-fit  p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16  gap-10  items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div> */}

            {/* <div className="max-h-fit  p-6">
              <h2 className="">Most Populor</h2>
              <div className="" id="albumn">
                <div className=" snap-x flex xl:gap-20 lg:gap-16 gap-10  items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div> */}
          </div>
          {/* Player Screen */}
          <div class="basis-full shrink-1 grow-1 lg:flex  flex-col-reverse gap-10 hidden relative h-[calc(100vh-56px)] p-6">
            {/* <div id="recent-player" class="bg-blue-400 mx-auto w-full self-start shrink-1 grow-1 max-w-md min-w-[300px] aspect-square rounded-lg"></div> */}
            <>
              <RecentPlay />
            </>
            {/* <div id="recent-player" class="bg-blue-200 mx-auto self-stretch max-w-xl min-w-[300px]  overflow-y-scroll">
              <div id="box"></div>
              <div id="box"></div>
              <div id="box"></div>
              <div id="box"></div>
              <div id="box"></div>
              <div id="box"></div>
            </div> */}
          </div>


          {/* FOR MOBILE VIEW OF ONGOING MUSIC   */}
          <div class="bg-gray-800 w-full h-16 lg:hidden fixed sm:bottom-0 bottom-14  justify-evenly">
            <div className=" mt-3.5  ">
              <div className="w-full border-2  border-gray-400 absolute top-0 "></div>
              <div className="w-1/2 border-2 border-orange-400 absolute top-0 "></div>
            </div>

            <div className=" ml-0% flex items-center justify-evenly ">
              {/* <img
                src="https://i1.sndcdn.com/artworks-3ITTy648eljqFP3e-LGDfnQ-t500x500.jpg"
                alt="heatwave"
                className=" ml-0pxpx"
                width={40}
              /> */}
              <GiPreviousButton size={20} color="rgb(251 146 60)" />
              <GiFastBackwardButton size={20} color="rgb(251 146 60)" />

              <img
                src="https://i1.sndcdn.com/artworks-3ITTy648eljqFP3e-LGDfnQ-t500x500.jpg"
                alt="heatwave"
                className=" ml-0pxpx  rounded-full"
                width={40}
              />
              <GiFastForwardButton size={20} color="rgb(251 146 60)" />
              <GiNextButton size={20} color="rgb(251 146 60)" />
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
