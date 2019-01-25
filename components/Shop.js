import React, { Component } from 'react';
import axios from "axios"

class Shop extends Component {
    state = {
        cars : [{}]
    }
    
    getAllCars = () => {
        axios.get("/api/shop")
        .then((res) => this.setState({cars: res.data}))
    }

    render() {
        return (
            <div>
            {this.state.cars.map((user,i) => (
                <div key = {i}>
                <h3>{cars.name}</h3>
                </div>
            ))}
                
            </div>
        );
    }
}

export default Shop;