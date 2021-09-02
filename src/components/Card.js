import React from "react";
// import {useParams} from 'react-router';
import { connect } from "react-redux";


const Card = ({card}) => {

  return (
    <div
      className="ui raised very padded text comtainer segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{card.title}</h3>
      <p>{card.body}</p>
    </div>
  );
};


const mapStateToProps = (state,ownProps) => {
  let title = ownProps.match.params.profile;
  return {
    card : state.cards.find(card => card.title === title)
  }
};

export default connect(mapStateToProps)(Card);
