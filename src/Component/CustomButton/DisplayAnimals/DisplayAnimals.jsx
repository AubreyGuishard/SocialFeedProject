import React from "react";

const DisplayAnimals = (props) => {
    return (<>{props.myAnimals.map(animal => {
        return <p>The {animal.name} says {animal.sound}</p>

    })}</>);
}
 
export default DisplayAnimals;