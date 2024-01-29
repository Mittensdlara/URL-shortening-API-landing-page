import Image from "next/image"

const Card = ({ title, description,icon}) => {


  return (
    <>
      <div className="card w-9/12 bg-base-100 shadow-xl m-2">
        <figure className="pt-5">
          <Image
            src={icon}
            alt="brand"
            className="rounded-2xl m-2 p-2 bg-DarkViolet"
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
