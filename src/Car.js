import React, { Component } from 'react';

import CarList from './CarList'
import CarForm from './CarForm'

class Car extends Component {

     constructor(props) {
         super(props)

         this.state = {
            cars: []
         }

         this.carFormElement = React.createRef()
     }

     formSubmit = (formState, e) => {
         e.preventDefault()
        console.log(this)
        const newCar = {
            id: this.state.cars.length + 1,
            make: formState.make,
            model: formState.model,
            year: formState.year
        }

        this.setState({
            cars: [...this.state.cars, newCar]
        })

        this.carFormElement.current.clearForm()


     }

     buttonClick(){
         console.log('button clicked', this)
     }

    render() {
        
        return (
            <div>
                <CarForm onSubmit={this.formSubmit} ref={this.carFormElement}/>
                <button onClick={() => this.buttonClick()}>Click</button>
                { this.state.cars.length === 0 ? <h1>No cars to render</h1> : < CarList cars={this.state.cars} />}
            </div>
        );
    }
}

export default Car;