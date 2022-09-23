// import { Component } from "react";
import "./card-list.style.css";
import "../card/card.component";
import Card from "../card/card.component";

const CardList = ({people}) => {
    return (<div className="card-list">
        {
            people.map( (person) => {
            return (
                    <Card key={person.id} person={person}></Card>
            ) 
            } )
        }
    </div>)
}

export default CardList;