  import React,{useEffect} from 'react';
import myImage from './img/comp.png';
import ProductList from './ProductList';
import './App.css';

const Body = ({  }) => {

  return (
    <div class='container'>

        <div class='wrapper_container'>      



          <img id="main_wrapper" src={myImage}/>  
        </div> 
           

    
  

      <div className='body__category__tittle'>
      <h2>Список товарів</h2>
      </div>



      <div class='list_contaier'>
      <ProductList />
      </div>

    </div>

   









  );
};

export default Body;