import React from "react";
import "../App.css";

const DescriptionComponent = (props) => {
  return (
    <div className="description-container">
      <label>Description:</label>
      <textarea placeholder={props.placeholder}></textarea>
    
    </div>
  );
};

export default DescriptionComponent;
