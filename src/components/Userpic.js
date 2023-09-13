import React from "react";
import defaultUserpic from '../img/userpic 280.jpeg'

function Userpic(props) {
  return (
    <figure className="media-left is-hidden-mobile">
      <p className="image is-128x128">
        <img src={defaultUserpic} alt="default userpic" />
      </p>
      <p className="user-id">
        <strong>ID</strong> <small>{props.userID}</small>
      </p>
    </figure>
  )
}

export default Userpic;