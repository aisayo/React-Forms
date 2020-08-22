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

    makeChange = (e) => {
        this.setState({
            make: e.target.value
        })     
    }

     modelChange = (e) => {
        this.setState({
            model: e.target.value
        })
         
    }

    yearChange = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    clearForm = () => {
        this.setState({
            make: '',
            model: '',
            year: ''
        })
    }

    render(){
        return (
            <div>
                
                <form onSubmit={(e) => this.props.onSubmit(this.state, e)}>
                       <label> Make </label>
                       <input 
                        type='text' 
                        label="make"
                        onChange={this.makeChange}
                        value={this.state.make}
                        />
    
                    <br />
                    <br />
    
                       <label> Model </label>
                       <input 
                            type='text'
                            onChange={this.modelChange} 
                            label="model"
                            value={this.state.model}
                        />
                    <br />
                    <br />
    
                       <label> Year </label>
                       <input 
                        type='text' 
                        onChange={this.yearChange} 
                        label="year"
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