// import { Component } from "react";
import "./card.styles.css";

const Card = ({person}) => {
    const {name, email, phone, website} = person;
    return (
        <div className='card'>
            <h2 > Name - {name} </h2>
            <h2 > Email - {email} </h2>
            <h2 > Phone - {phone} </h2>
            <h2 > Website - {website} </h2>
        </div>
    )
}

export default Card;