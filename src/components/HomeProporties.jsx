import React from "react";
import PropertyCard from "./PropertyCard";

async function fetchProperties() {
  try {
    const res = await fetch("http://localhost:3000/api/properties");
    const data = res.json();
    // console.log(data);
    if (!res.ok) return console.log("data not found");
    return data;
  } catch (error) {
    console.log(error);
  }
}

const HomeProporties = async () => {
  const data = await fetchProperties();
  const recentProperties = data.properties.sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {recentProperties.map((property, index) => {
          return <PropertyCard property={property} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomeProporties;
