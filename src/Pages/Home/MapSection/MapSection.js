import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapSection = () => {
  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const center = {
    lat: 23.729298210825366,
    lng: 90.40099041126946,
  };
  return (
    <div
      className="bg-white flex flex-col lg:flex-row justify-center items-center py-10 "
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      <LoadScript googleMapsApiKey="AIzaSyCTcrDBAAoc0Sp81UmYduf6bRTOX_zHcW0">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <div className="px-10 py-5">
        <h1 className="font-bold text-2xl">Present address</h1>
        <p>
          Present Address- Bangladesh Shishu Academy ,<br />
          Doyel Chattor, Shabag, Dhaka-1000
        </p>
      </div>
      <div>
        <h1 className="font-bold text-2xl">Permanent Address</h1>
        <p>
          ermanent Address- Mymensingh District <br />
          Mymensingh, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default MapSection;
