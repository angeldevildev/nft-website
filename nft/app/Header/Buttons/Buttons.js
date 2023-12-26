import React from "react";
import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faSheetPlastic } from "@fortawesome/free-solid-svg-icons";

function Buttons(props) {
  return (
    <div className="btn-component">
      <div className="explore-btn">
        <button className="btn1">
          <FontAwesomeIcon
            icon={faRocket}
            style={{ marginRight: "10px", marginTop: "3px" }}
            width={10}
          />
          {props.explore}
        </button>
      </div>
      <div className="join-btn">
        <button className="btn2">
          <FontAwesomeIcon
            icon={faSheetPlastic}
            style={{ marginRight: "8px", marginTop: "2px" }}
            width={10}
          />
          {props.join}
        </button>
      </div>
    </div>
  );
}

export default Buttons;
