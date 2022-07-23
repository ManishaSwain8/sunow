import React from "react";
import mainObject from "../../utils/Main";
// import Chart from "./Chart";
// import ListeningHistory from "./ListeningHistory";
// import RecentPlay from "./RecentPlay";

function OverflowXScroll({ item }) {
  return (
    <div class="snap-start shrink-0 grow-1">
      <img alt="unsplash" src={item.image_url} className="w-52 rounded-md" />
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
  // const image_url = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/160db2f2cc6eaef1ad40cb4f5f43cffd_screen.jpg?ts=1561422695";
  const overflowXScroll = mainObject.map((item, index) => <OverflowXScroll item={item} index={index} />);
  return (
    <>
      <section id="screen" class="">
        <div id="top-nav" class="h-14 flex items-center justify-end px-6 space-x-1">
          <img src={url} alt="profile" class="w-12 h-12 bg-white rounded-full" />
          <div class="hidden sm:block">
            <h3>Krishna Nayak</h3>
            <h5>Premium</h5>
          </div>
        </div>
      </section>

      <div className="">
        {/* lg:flex h-screen justify-end */}
        <section id="player-list" class="">
          <div class="space-y-2 basis-[60%] flex-none shrink-1 overflow-y-scroll">
            <div class="max-h-fit  p-6">
              <h2 class="">Most Populor</h2>
              <div class="" id="albumn">
                <div class="snap-x flex xl:gap-20 gap-16 items-center overflow-x-scroll">{overflowXScroll}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
