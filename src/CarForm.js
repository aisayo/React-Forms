import React, { Component } from 'react';

class CarForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            make: '',
            model: '',
            year: ''
        }
    }

    // makeChange = (e) => {
    //     this.setState({
    //         make: e.target.value
    //     })     
    // }

    //  modelChange = (e) => {
    //     this.setState({
    //         model: e.target.value
    //     })
         
    // }

    // yearChange = (e) => {
    //     this.setState({
    //         year: e.target.value
    //     })
    // }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log('name', name)
        console.log('value', value)
        
        this.setState({
            [name]: value
        })
    }

    submitForm = (e) => {
       this.props.onSubmit(this.state, e)
       this.setState({
           make: '',
           model: '',
           year: ''
       })
    }

    render(){
        return (
            <div>
                
                <form onSubmit={this.submitForm}>
                       <label> Make </label>
                       <input 
                        type='text' 
                        name="make"
                        onChange={this.handleChange} 
                        value={this.state.make}
                        />
    
                    <br />
                    <br />
    
                       <label> Model </label>
                       <input 
                            type='text'
                            onChange={this.handleChange} 
                            name="model"
                            value={this.state.model}
                        />
                    <br />
                    <br />
    
                       <label> Year </label>
                       <input 
                        type='text' 
                        onChange={this.handleChange} 
                        name="year"
                        value={this.state.year}
                        />
                    <br />
                    <br />
    
                    <button> Create Car </button>
    
                   </form>
    
            </div>
        );
    
    }
}

export default CarForm;