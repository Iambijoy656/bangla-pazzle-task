import React from "react";

const UpcomingEvent = () => {
  const myStyles = {
    letterSpacing: "10px",
  };
  return (
    <div className="bg-white">
      <h1
        style={myStyles}
        className="text-4xl font-semibold text-blue-900 p-10 uppercase"
      >
        Upcoming Event
      </h1>
      <p className="flex justify-center items-center py-5">No event Found</p>
    </div>
  );
};

export default UpcomingEvent;
