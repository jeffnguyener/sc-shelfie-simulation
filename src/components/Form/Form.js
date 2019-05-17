import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard'

import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCurrentProducts: []
        }
    }

    componentDidMount() {
        this.handleGetProducts()
    }

    handleGetProducts = () => {
        axios.get('/api/products').then(res => {
            this.setState({
                allCurrentProducts: res.data
            })
        })
    }

    handleNewProduct = (name, price, img) => {
        axios.post(`/api/addproduct`, { name: name, price: price, img: img }).then(res => {
            this.setState({
                allCurrentProducts: res.data
            })
        })
        .catch(err => alert(err));
    }

    handleUpdatedProduct = (id, name, price, img) => {
        axios.put(`/api/product/${id}`, { name: name, price: price, img: img }).then(res => {
            this.setState({
                allCurrentProducts: res.data
            })
        })
        .catch(err => alert(err));
    }

    handleDeletedProduct = (id, name, price, img) => {
        axios.put(`/api/product/${id}`, { name: name, price: price, img: img }).then(res => {
            this.setState({
                allCurrentProducts: res.data
            })
        })
        .catch(err => alert(err));
    }


        render() {
            const Product = this.state.allCurrentProducts.map((products) => <Dashboard products={products} handleNewProduct={this.handleNewProduct} />)


            return (
                <div>
                    <div className="form">
                        <div className="box-uploader">
                            <img src="https://cdn0.iconfinder.com/data/icons/interface-10/128/_add_image-512.png">
                            </img>
                            <p>Image URL:</p>
                            <input
                                placeholder='image url' />
                            <p>Product Name:</p>
                            <input
                                placeholder='product name' />
                            <p>Price</p>
                            <input
                                placeholder='price' />
                        </div>


                    </div>
                    <button onClick={this.handleCancel} disabled={this.state.edit}>Cancel</button>
                    <button onClick={this.handleNewProduct} disabled={this.state.edit}>Add to inventory</button>
                </div>
            )
        }
    }

    export default Form;