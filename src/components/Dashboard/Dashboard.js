import React, { Component } from 'react';
import Product from '../Product/Product';

import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }

    }




    render() {
const Product = this.state.allCurrentProducts.map((products) => 


        return (
            <div>
                <div className="Dash">

                    <div className="box1">
                        <div className="inner-box1"></div>
                    </div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    {Product}
                 </div>
            </div>
        )
    }
}

export default Dashboard;