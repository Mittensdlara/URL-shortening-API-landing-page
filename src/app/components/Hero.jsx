import Image from "next/image";

import heroHeader from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="flex lg:flex-row gap-5 flex-col-reverse text-center lg:text-left  m-5">
      <div className="hero-text mt-5">
        <h1 className="font-bold  mb-5 text-4xl lg:text-7xl  ">
          More than just <br /> shorter links
        </h1>
        <p className="text-GrayishViolet font-semibold ">
          Build your brand's recognition and get detailed <br /> insights on how
          your links are performing.
        </p>
        <button className="btn btn-primary mt-5">Get Started</button>
      </div>

      <div className="img">
        <Image src={heroHeader} />
      </div>
    </div>
  );
};

export default Hero;
