import React, { Component } from 'react';

import CarList from './CarList'
import CarForm from './CarForm'

class Car extends Component {

     constructor(props) {
         super(props)

         this.state = {
            cars: []
         }
     }

     formSubmit = (e, formState) => {
         e.preventDefault()

        const newCar = {
            id: this.state.cars.length + 1,
            make: formState.make,
            model: formState.model,
            year: formState.year
        }

        this.setState({
            cars: [...this.state.cars, newCar]
        })

     }

    render() {
        
        return (
            <div>
                <CarForm onSubmit={this.formSubmit} />
                { this.state.cars.length === 0 ? <h1>No cars</h1> : < CarList cars={this.state.cars} />}
            </div>
        );
    }
}

export default Car;