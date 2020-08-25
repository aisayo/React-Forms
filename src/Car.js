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

     formSubmit = (formData, e) => {
         e.preventDefault()
        const newCar = {
            id: this.state.cars.length + 1,
            make: formData.make,
            model: formData.model,
            year: formData.year
        }

        this.setState({
            cars: [...this.state.cars, newCar]
        })
     }

     buttonClick(){
         console.log('button clicked', this)
     }

    render() {
        
        return (
            <div>
                <CarForm onSubmit={this.formSubmit} />
                <button onClick={() => this.buttonClick()}>Click</button>
                { this.state.cars.length === 0 ? <h1>No cars to render</h1> : < CarList cars={this.state.cars} />}
            </div>
        );
    }
}

export default Car;