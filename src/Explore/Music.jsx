import React from "react";

export default function Music() {
  return (
    <div>
      <Top50Box />
      <Top50Box />
      <Top50Box />
      <Top50Box />
      <Top50Box />
      <Top50Box />
    </div>
  );
}
const Top50Box = () => {
  return (
    <div className=" hover:shadow  inline-block ml-9 mt-6 space-x-5 ">
      <div>
        <img
          src="http://filmmusicreporter.com/wp-content/uploads/2018/05/mosaic.jpg"
          alt="albumImage"
          className="rounded-md w-12"
        />
        <h2>Mosaic Cool </h2>
        <h3>hata dena isko &#128523;</h3>
      </div>
    </div>
  );
};
