import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product.js'

class App extends Component {
  render() {
    let products = [
      {
        id: 1,
        name: 'Apple',
        price: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIqfTtf7_8JF_F4NUAmUvL4O3P5IHp-dCvx6KBjB-ve8cGdLs',
        status: true
      },
      {
        id: 2,
        name: 'Banane',
        price: 5,
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/half-peeled-banana-tianxin-zheng.jpg',
        status: false
      },
      {
        id: 3,
        name: 'Melon',
        price: 20,
        image: 'http://flakphoto.com/assets/photos/henriette-mackey-lund-frog-skin-melon.jpg',
        status: true
      },
    ];

    let items = products.map((product, index) => {
      return <Product 
              image={product.image}
              price={product.price}
              >
              {product.name}
              </Product>
    });

    return (
      <div>
      Props
      <div>
        {items}
      </div>
      </div>
    );
  }

}

export default App;
