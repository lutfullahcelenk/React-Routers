import React from "react";
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {connect} from 'react-redux';

const Contact = (props) => {
  // console.log(props)

  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text comtainer segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/alex">Alex</Link>
        <p>
          Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu
          amet.
        </p>
      </div>
      <div
        className="ui raised very padded text comtainer segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/lutfullah">Lutfullah</Link>
        <p>
          Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu
          amet.
        </p>
      </div>
    </div>
  );
};

export default connect(Contact) ;
