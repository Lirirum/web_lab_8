
import React, { Component,  createContext,useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ProductDetail from './ProductDetail';  
import Authorization from './Authorization';

import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider ,connect  } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  RegistrationForm  from './RegistrationForm';

import CartMenu from './CartMenu';
import { store, persistor } from './store';
import AuthorizationForm from './AuthorizationForm';
import ProductForm from './ProductForm';

class App extends Component {
  

  render() {  
    return (  
      <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

      <Router>  
     <CartMenu></CartMenu>

      < Authorization></Authorization>
      <div >        
      <Header/>    
     
      <Routes>
        <Route path="/" element={<Body  />} />
        <Route path="/product/:id" element={<ProductDetail   />} />   
        <Route path="/about-us" element={<AboutUs />} />    
        <Route path="/register" element={<RegistrationForm />} />    
        <Route path="/log" element={<AuthorizationForm />} />    
        <Route path="/product" element={<ProductForm />} />    
      </Routes>
      <Footer></Footer>
      </div>
    

    </Router>
  

    </PersistGate>
    </Provider>
    );
  }
}
const mapStateToProps = (state) => ({
  menuIsOpen: state.cart.cartMenu,
});

export default connect(mapStateToProps)(App);