import React, {useState, useEffect} from "react";
// import {useParams} from 'react-router'

const Card = ({match}) => {

    const [user,setUser] = useState("")

    useEffect(() => {
        setUser(match.params.user)
    })

  return (
    <div
      className="ui raised very padded text comtainer segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui hader">{user}</h3>
    </div>
  );
};

export default Card;
