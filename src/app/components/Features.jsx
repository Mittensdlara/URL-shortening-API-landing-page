import Card from "./Card";
import brandRecognition from "../images/icon-brand-recognition.svg"
import detailedRecords from "../images/icon-detailed-records.svg"
import fullyCustomize from "../images/icon-fully-customizable.svg"


const Features = () => {
  return (
    <>
      <div className="features mt-5">
        <h1 className="font-bold text-center lg:text-left mb-5 text-4xl lg:text-6xl">
          {" "}
          Advanced Statistics
        </h1>
        <p className="text-center lg:text-left text-GrayishViolet font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className=" mt-5">
        <div
          className="cards  flex flex-col lg:flex-row items-center"
        >
          <Card
          icon={brandRecognition}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links dont 
        mean a thing. Branded links help instil confidence in your content."
          />
          <Card
           icon={detailedRecords}
            title="  Detailed Records"
            description=" Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions."
          />

          <Card
          icon={fullyCustomize}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
