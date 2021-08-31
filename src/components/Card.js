import React, {useState, useEffect} from "react";
// import {useParams} from 'react-router'

const Card = ({match}) => {

    const [userName,setUserName] = useState("")

    useEffect(() => {
        setUserName(match.params.profile)
    })

  return (
    <div
      className="ui raised very padded text comtainer segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui hader">{userName}</h3>
    </div>
  );
};

export default Card;
