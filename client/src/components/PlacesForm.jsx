import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import PhotoUploader from "./PhotoUploader";

const PlacesForm = () => {
  const handleSubmit = (e) => {};

  const handleInputChanges = (type, e) => {};

  return (
    <div className="border border-gray-200 w-7/12 px-6 py-8 rounded-md shadow-md">
      <div className="">
        <h1 className="text-4xl mb-12 text-center text-primary">Place Info</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Input
            label={"Title :"}
            descriptions={
              "Title for your place. should be short and catchy as in advertisement"
            }
            onChange={(e) => handleInputChanges("title", e)}
            type={"text"}
            placeholder={"title, for example: My lovely apt"}
          />
          <Input
            label={"Address :"}
            descriptions={"Address to this place"}
            onChange={(e) => handleInputChanges("address", e)}
            type={"text"}
            placeholder={"address, for example: Tilak Nagar New Delhi"}
          />
          <PhotoUploader
            label={"Photos"}
            desscription={"Add photos of the place"}
          />
          <TextArea
            label={"Description :"}
            descriptions={"description of the place"}
            onChange={(e) => handleInputChanges("description", e)}
            placeholder={
              "description , for example: tell us more about this place"
            }
            rows="5"
            cols="10"
          />
          <TextArea
            label={"Extra info :"}
            descriptions={"house rules, etc"}
            onChange={(e) => handleInputChanges("extraInfo", e)}
            placeholder={"tell us more about this place"}
            rows="5"
            cols="10"
          />

          <button className="bg-primary text-white p-3 rounded-full w-full mt-1">
            Save Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
