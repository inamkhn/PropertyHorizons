import Image from "next/image";

const PropertyHeaderImage = ({property}) => {
  console.log(property.images[1])
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <img
            src={property.images[0]}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
