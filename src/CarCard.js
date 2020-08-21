import React from 'react';

const CarCard = (props) => {
    return (
        <div>
            {props.car.make} - {props.car.model} - {props.car.year}
        </div>
    )
}

export default CarCard;