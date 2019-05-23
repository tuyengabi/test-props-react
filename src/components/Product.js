import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.image } />
        <div>
          <h3>
            { this.props.name }
          </h3>
          <p>
            { this.props.price } Euro
          </p>
          <p>
            <a href="">achetez</a>
          </p>
        </div>
      </div>
    );
  }

}

export default Product;
