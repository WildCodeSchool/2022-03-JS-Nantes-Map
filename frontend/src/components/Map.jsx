import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="Map">
      <iframe
        title="Map"
        src="https://www.google.com/maps/d/embed?mid=1LBYXosdlKMAeGdxHoF9OWENSaxreTQnj&ehbc=2E312F"
        width="440"
        height="280"
      />
    </div>
  );
}

export default Map;
