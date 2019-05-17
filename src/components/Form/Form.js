import React, { Component } from 'react';

import './Form.css'

class Form extends Component {
    constructor() {
    super()
    this.state = {
        input: "",
        edit: false
    }
}
handleInput = (database) => {
    this.setState({
        input: product.target.value
    })
}

savedInput = () => {
    const { id } = this.props.database
    const { input } = this.state
    this.props.handleUpdatedProduct(id, input);
    this.setState({
        input: ""
    })
}

deleteInput = () => {
    const { id } = this.props.database
    const { input } = this.state
    this.props.handleDeletedProduct(id, input);
}

    render() {


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
                <button onClick={this.savedInput} disabled={this.state.edit}>Cancel</button>
                <button onClick={this.deleteInput} disabled={this.state.edit}>Add to inventory</button>
            </div>
        )
    }
}

export default Form;