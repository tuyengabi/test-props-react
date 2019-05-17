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
        name="apple"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIqfTtf7_8JF_F4NUAmUvL4O3P5IHp-dCvx6KBjB-ve8cGdLs"
        price="1000"/>
      <Product 
        name="banane"
        price="1500"/>
      <Product 
        name="melon"
        price="1200"/>
      </div>
    );
  }

}

export default App;
