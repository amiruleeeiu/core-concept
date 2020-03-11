import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends=['Zibon','Ahsan','Rakib','Obaidur','Shoaib','Sad'];
  const products=[
    {name:'Protoshop',price:'$66.99'},
    {name:'Illustrator',price:'$48.90'},
    {name:'PDF reader',price:'$4.33'},
    {name:'Premium',price:'$245.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(fri=><li>{fri}</li>)
          }
        </ul>
          <Product product={products[1]}></Product>

          {
            products.map(product=><Product product={product}></Product>)
          }
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(0);

    return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  return(
  <div>
    <h3>Dynamic User :{users.length}</h3>
    <ul>
      {console.log(users)}
      {
        users.map(user=><li>{user.email}</li>)
      }
    </ul>
    </div>
  )
}

function Product(props){
  const {name,price}=props.product;
  const contentstyle={
    backgroundColor:'gray',
    color:'black',
    border:'2px solid gray',
    margin:'10px',
    padding:'20px',
    height:'200px',
    width:'200px'
  }
  return(
    <div style={contentstyle}>
      <h2>{name}</h2>
      <h3>Price: {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
