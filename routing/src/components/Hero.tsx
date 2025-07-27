import React from "react";
import screenshot from "public/Screenshot 2025-06-27 034906.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={screenshot}
          fill
          alt="frontend pic"
          style={{ objectFit: "cover" }}
        />
      </div>
      <center className="font-bold text-6xl">Frontend Ui</center>
    </div>
  );
};

export default Hero;
