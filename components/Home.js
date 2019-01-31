import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shop from './Shop';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Home</h1>

                <Link to= {Shop}>
                <button>Shop Cars</button>
                </Link>
            </div>
        );
    }
}

export default Home;