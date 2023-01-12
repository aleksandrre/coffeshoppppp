import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const products=["Joint","Pipe","სათითე","Bong"]

const ShoppingCart=(props) => {
  
  

  const[productsList,setProductsList]=useState(products);
  const[cartItems,setCartItems]=useState([]);
  
  const handleClick=(product) =>{
    setCartItems((prevCart) => {
      return [...prevCart,product];
    })
  };
  const handleRemove=(productIndex) =>{
   const newCart= cartItems.filter((product,index) =>{
      return productIndex !==index;
       
    })
     setCartItems(newCart)

  }
  return(
    <div className='parentDiv'>
      <div className='div1'>
        <h1 className='h1'>{props.title}</h1>
        {productsList.map((product,index) =>{
          return <div className='buttonsDiv'><button  key={index} onClick={() => handleClick(product)}>{product}</button></div>
        })}
      </div>
      <div className='div2'>
        <h2 className='h2'>Shopping Cart</h2>
        <ul className='cart'>
          {cartItems.map((cartItem,index) =>{
            return <li  key={index} onClick={() =>handleRemove(index)}>{cartItem}</li>
          })}
        </ul>
      </div>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  < ShoppingCart title="Coffe Shop"/>
  

);


