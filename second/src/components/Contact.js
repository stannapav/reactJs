import React from "react";

function Contact(props) {
  return (
    <div className="contact-card">
      <img src={"../images/" + props.image} />
      <h3>{props.breed}</h3>

      <div className="info-group">{props.info}</div>
    </div>
  );
}

export default Contact;
