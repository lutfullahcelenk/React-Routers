import React from "react";
import { Link } from "react-router-dom";
// import Modal from './Modal';
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  // console.log(props.cards)

  return (
    <div>
      {/* <Modal /> */}

      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text comtainer segment"
            style={{ marginTop: "80px" }}
            key = {card.id}
          >
            <Link to={`/${card.title}`}>{card.title}</Link>
            <p>
              {card.body}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const cards = state.cards;
  return {
    cards: cards,
  };
};

export default connect(mapStateToProps)(Contact);
