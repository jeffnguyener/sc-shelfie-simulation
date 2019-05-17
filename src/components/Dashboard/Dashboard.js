import React, { Component } from 'react';
import Product from '../Product/Product';

import './Dashboard.css'

class Dashboard extends Component {
    render() {



        return (
            <div>
                <header className="header"></header>
                <span className="shelfie">Shelfie</span>
                {Product}
            </div>
        )
    }
}

export default Dashboard;