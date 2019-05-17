import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product.js'

class App extends Component {
  render() {
    return (
      <div>
      Props
      <Product 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIqfTtf7_8JF_F4NUAmUvL4O3P5IHp-dCvx6KBjB-ve8cGdLs"
        price="1000"i
      >
        Apple
      </Product>
      <Product 
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/half-peeled-banana-tianxin-zheng.jpg"
        price="1500"
      >
        Banane
      </Product>
      <Product 
        image="http://flakphoto.com/assets/photos/henriette-mackey-lund-frog-skin-melon.jpg"
        price="1200"
      >
        Melon
      </Product>
      </div>
    );
  }

}

export default App;
