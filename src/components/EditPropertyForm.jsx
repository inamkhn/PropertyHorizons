"use client"
import React,{useState} from "react";

const EditPropertyForm = () => {

    const [fields, setFields] = useState({
        type: "",
        name: "",
        description: "",
        location: {
          street: "",
          city: "",
          state: "",
          zipcode: "",
        },
        beds: "",
        baths: "",
        square_feet: "",
        amenities: [],
        rates: {
          weekly: "",
          monthly: "",
          nightly: "",
        },
        seller_info: {
          name: "",
          email: "",
          phone: "",
        },
      });
      console.log(fields);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        if (name.includes(".")) {
          const [outerKey, innerKey] = name.split(".");
          setFields((prev) => ({
            ...prev,
            [outerKey]: { ...prev[outerKey], [innerKey]: value },
          }));
        } else {
          setFields((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
      };
    
      const handleAmenitiesChange = (e) => {
        const { value, checked } = e.target;
    
        // Clone the current array
        const updatedAmenites = [...fields.amenities];
    
        if (checked) {
          // Add value to array
          updatedAmenites.push(value);
        } else {
          // Remove value from array
          const index = updatedAmenites.indexOf(value);
    
          if (index !== -1) {
            updatedAmenites.splice(index, 1);
          }
        }
    
        // Update state with updated array
        setFields((prevFields) => ({
          ...prevFields,
          amenities: updatedAmenites,
        }));
      };

  return (
    <div>
      {" "}
      <section class="bg-blue-50">
        <div class="container m-auto max-w-2xl py-24">
          <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form
              action="/api/properties"
              method="POST"
              encType="multipart/form-data"
            >
              <h2 class="text-3xl text-center font-semibold mb-6">
                Edit Property
              </h2>
              <div class="mb-4">
                <label for="type" class="block text-gray-700 font-bold mb-2">
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  class="border rounded w-full py-2 px-3"
                  required
                  value={fields.type}
                  onChange={handleChange}
                >
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="House">House</option>
                  <option value="Cabin Or Cottage">Cabin or Cottage</option>
                  <option value="Room">Room</option>
                  <option value="Studio">Studio</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Listing Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={fields.name}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <label
                  for="description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add an optional description of your property"
                  value={fields.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div class="mb-4 bg-blue-50 p-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="street"
                  name="location.street"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Street"
                  value={fields.location.street}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="city"
                  name="location.city"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="City"
                  required
                  value={fields.location.city}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="state"
                  name="location.state"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="State"
                  required
                  value={fields.location.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="zipcode"
                  name="location.zipcode"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Zipcode"
                  value={fields.location.zipcode}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-4 flex flex-wrap">
                <div class="w-full sm:w-1/3 pr-2">
                  <label for="beds" class="block text-gray-700 font-bold mb-2">
                    Beds
                  </label>
                  <input
                    type="number"
                    id="beds"
                    name="beds"
                    class="border rounded w-full py-2 px-3"
                    required
                    value={fields.beds}
                    onChange={handleChange}
                  />
                </div>
                <div class="w-full sm:w-1/3 px-2">
                  <label for="baths" class="block text-gray-700 font-bold mb-2">
                    Baths
                  </label>
                  <input
                    type="number"
                    id="baths"
                    name="baths"
                    class="border rounded w-full py-2 px-3"
                    required
                    value={fields.baths}
                    onChange={handleChange}
                  />
                </div>
                <div class="w-full sm:w-1/3 pl-2">
                  <label
                    for="square_feet"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Square Feet
                  </label>
                  <input
                    type="number"
                    id="square_feet"
                    name="square_feet"
                    class="border rounded w-full py-2 px-3"
                    required
                    value={fields.square_feet}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Amenities
                </label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_wifi"
                      name="amenities"
                      value="Wifi"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Wifi")}
                    />
                    <label for="amenity_wifi">Wifi</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_kitchen"
                      name="amenities"
                      value="Full Kitchen"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Full kitchen")}
                    />
                    <label for="amenity_kitchen">Full kitchen</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_washer_dryer"
                      name="amenities"
                      value="Washer & Dryer"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Washer & Dryer")}
                    />
                    <label for="amenity_washer_dryer">Washer & Dryer</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_free_parking"
                      name="amenities"
                      value="Free Parking"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Free Parking")}
                    />
                    <label for="amenity_free_parking">Free Parking</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_pool"
                      name="amenities"
                      value="Swimming Pool"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Swimming Pool")}
                    />
                    <label for="amenity_pool">Swimming Pool</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_hot_tub"
                      name="amenities"
                      value="Hot Tub"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Hot Tub")}
                    />
                    <label for="amenity_hot_tub">Hot Tub</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_24_7_security"
                      name="amenities"
                      value="24/7 Security"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("24/7 Security")}
                    />
                    <label for="amenity_24_7_security">24/7 Security</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_wheelchair_accessible"
                      name="amenities"
                      value="Wheelchair Accessible"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes(
                        "Wheelchair Accessible"
                      )}
                    />
                    <label for="amenity_wheelchair_accessible">
                      Wheelchair Accessible
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_elevator_access"
                      name="amenities"
                      value="Elevator Access"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Elevator Access")}
                    />
                    <label for="amenity_elevator_access">Elevator Access</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_dishwasher"
                      name="amenities"
                      value="Dishwasher"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Dishwasher")}
                    />
                    <label for="amenity_dishwasher">Dishwasher</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_gym_fitness_center"
                      name="amenities"
                      value="Gym/Fitness Center"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Gym/Fitness Center")}
                    />
                    <label for="amenity_gym_fitness_center">
                      Gym/Fitness Center
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_air_conditioning"
                      name="amenities"
                      value="Air Conditioning"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Air Conditioning")}
                    />
                    <label for="amenity_air_conditioning">
                      Air Conditioning
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_balcony_patio"
                      name="amenities"
                      value="Balcony/Patio"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Balcony/Patio")}
                    />
                    <label for="amenity_balcony_patio">Balcony/Patio</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_smart_tv"
                      name="amenities"
                      value="Smart TV"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Smart TV")}
                    />
                    <label for="amenity_smart_tv">Smart TV</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="amenity_coffee_maker"
                      name="amenities"
                      value="Coffee Maker"
                      class="mr-2"
                      onChange={handleAmenitiesChange}
                      checked={fields.amenities.includes("Coffee Maker")}
                    />
                    <label for="amenity_coffee_maker">Coffee Maker</label>
                  </div>
                </div>
              </div>

              <div class="mb-4 bg-blue-50 p-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Rates (Leave blank if not applicable)
                </label>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div class="flex items-center">
                    <label for="weekly_rate" class="mr-2">
                      Weekly
                    </label>
                    <input
                      type="number"
                      id="weekly_rate"
                      name="rates.weekly"
                      class="border rounded w-full py-2 px-3"
                      value={fields.rates.weekly}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="flex items-center">
                    <label for="monthly_rate" class="mr-2">
                      Monthly
                    </label>
                    <input
                      type="number"
                      id="monthly_rate"
                      name="rates.monthly"
                      class="border rounded w-full py-2 px-3"
                      value={fields.rates.monthly}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="flex items-center">
                    <label for="nightly_rate" class="mr-2">
                      Nightly
                    </label>
                    <input
                      type="number"
                      id="nightly_rate"
                      name="rates.nightly"
                      class="border rounded w-full py-2 px-3"
                      value={fields.rates.nightly}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label
                  for="seller_name"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Seller Name
                </label>
                <input
                  type="text"
                  id="seller_name"
                  name="seller_info.name."
                  class="border rounded w-full py-2 px-3"
                  placeholder="Name"
                  value={fields.seller_info.name}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <label
                  for="seller_email"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Seller Email
                </label>
                <input
                  type="email"
                  id="seller_email"
                  name="seller_info.email"
                  class="border rounded w-full py-2 px-3"
                  placeholder="Email address"
                  required
                  value={fields.seller_info.email}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <label
                  for="seller_phone"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Seller Phone
                </label>
                <input
                  type="tel"
                  id="seller_phone"
                  name="seller_info.phone"
                  class="border rounded w-full py-2 px-3"
                  placeholder="Phone"
                  value={fields.seller_info.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditPropertyForm;
