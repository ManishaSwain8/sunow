import React from "react";
import Chart from "./Chart";
import ListeningHistory from "./ListeningHistory";
import RecentPlay from "./RecentPlay";
export default function Main() {
  const url =
    "https://media-exp1.licdn.com/dms/image/C5603AQHx3Gr967qhCA/profile-displayphoto-shrink_200_200/0/1557755310143?e=2147483647&v=beta&t=2ISmbVC3cK0Us_LfzRlQS66wLVpAgS07kWn8peYPnFw";
  return (
    <>
      {/* <div className="container mx-auto h-full"> */}
      {/* md:flex flex-col */}
      <div className="sm:px-8 w-full justify-around relative space-y-3 h-full">
        <div className="flex justify-between items-center">
          {/* className="text-2xl font-bold" */}
          <h1>
            Discover <span>{">"}</span> <span className="text-gray-400">Recently Played</span>{" "}
          </h1>
          <div className="flex gap-3 ">
            <img src={url} alt="profile" width={50} className="rounded" />
            <div className="sm:block hidden">
              <div className="flex flex-col justify-around min-h-full">
                <p>Krishna Nayak</p>
                <p className="text-xs font-light text-gray-400">Premium</p>
              </div>
            </div>
          </div>
        </div>
        {/* md:h-full  */}
        <div className="basis-full ">
          <Chart />
        </div>
        <div className="self-stretch justify-self-stretch ">
          <div className="flex justify-between gap-10 relative">
            <ListeningHistory />
            <RecentPlay />
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Main() {
//   return (
//     // FIXME: Change height not in screen size 100vh !!!
//     <div className="sm:px-8 p-3 md:overflow-hidden w-full  relative space-y-3 h-full">
//       {/* Sreen HEad */}
//       <div className="h-[40vh]">
//         <div className="flex justify-between items-center">
//           <p className="text-2xl font-bold">
//             Discover <span>{">"}</span> <span className="text-gray-400">Recently Played</span>
//           </p>
//           <div className="flex gap-3 ">
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C5603AQHx3Gr967qhCA/profile-displayphoto-shrink_200_200/0/1557755310143?e=2147483647&v=beta&t=2ISmbVC3cK0Us_LfzRlQS66wLVpAgS07kWn8peYPnFw"
//               alt="profile"
//               width={50}
//               className="rounded"
//             />
//             <div className="flex flex-col justify-around min-h-full">
//               <p className="text-sm">Krishna Nayak</p>
//               <p className="text-xs font-light text-gray-400">Premium</p>
//             </div>
//           </div>
//         </div>

//         {/* Chart */}
//         <div className="min-h-[280px] sm:w-full">
//           <Chart />
//         </div>
//       </div>

//       {/* Listening History */}
//       <div className="flex gap-10 relative border-2 h-[50vh]">
//         <ListeningHistory />

//         <div className="basis-[30vw] relative">
//           <div className="fixed right-8 bottom-16">
//             <RecentPlay />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
