import brandIcon from "../images/icon-brand-recognition.svg"
import Image from "next/image"

const Card = ({ title, description }) => {


  return (
    <>
      <div className="card w-9/12 bg-base-100 shadow-xl m-5">
        <figure className="px-10 pt-10">
          <Image
            src={brandIcon}
            alt="brand"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
