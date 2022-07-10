import React from "react";
import musicList from "../../assets/images/new-listener.png";

const OnBording = ({ show, setShow }) => {
  return (
    <section className="relative h-[100vh]">
      <div>
        <img src={musicList} alt="music-listener" className="relative bottom-8 w-full" />
      </div>
      {/* <div className="text-center">Login</div> */}
      <div className="px-8 py-16 absolute bottom-0 space-y-9  w-full rounded-t-3xl bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Listen the Best Music everyday with <span className="text-green-500">Sunow</span> now!
          </h1>
        </div>
        <button onClick={() => setShow(!show)} type="submit" className="bg-green-500 p-3 rounded-full w-full text-white font-bold">
          Submit
        </button>
      </div>
    </section>
  );
};

export default OnBording;
