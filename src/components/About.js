import React from "react";
import "./Modal.css";

const About = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="modal">
          <div className="modal-content">
            <h3>I am a modal</h3>
          </div>
        </div>
      </div>

      <div
        className="ui raised very padded text comtainer segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui hader">About</h3>
        <p>
          Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu
          amet.
        </p>
      </div>
    </div>
  );
};

export default About;
