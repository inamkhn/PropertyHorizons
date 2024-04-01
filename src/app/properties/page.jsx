"use client";

import AllProperties from "@/components/AllProperties";
import PropertySearchForm from "@/components/PropertySearchForm";
import React from "react";

const Properties = async () => {

  return (
    <div>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <AllProperties/>
    </div>
  );
};

export default Properties;
