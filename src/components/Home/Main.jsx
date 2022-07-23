import React from "react";
// import Chart from "./Chart";
// import ListeningHistory from "./ListeningHistory";
// import RecentPlay from "./RecentPlay";
export default function Main() {
  const url =
    "https://media-exp1.licdn.com/dms/image/C5603AQHx3Gr967qhCA/profile-displayphoto-shrink_200_200/0/1557755310143?e=2147483647&v=beta&t=2ISmbVC3cK0Us_LfzRlQS66wLVpAgS07kWn8peYPnFw";
  return (
    <>
      <section id="screen" class="">
        <div id="top-nav" class="h-14 flex items-center justify-end px-6 space-x-1">
          <img src={url} alt="image" class="w-10 h-10 bg-white rounded-full" />
          <div class="rounded-full hidden sm:block">
            <h3>Krishna Nayak</h3>
          </div>
        </div>
      </section>

      <div className=""></div>
    </>
  );
}
