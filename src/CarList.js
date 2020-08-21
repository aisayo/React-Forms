import React from 'react';

import CarCard from './CarCard'

// const CarList = (props) => (
    
//     (props.cars.map(car => (<CarCard key={car.id} car={car} /> )))

// );



const CarList = (props) => (
    <div>
        <h1> Cars </h1>
        { props.cars.map(car => (<CarCard key={car.id} car={car} /> ))}
    </div>


)

export default CarList;