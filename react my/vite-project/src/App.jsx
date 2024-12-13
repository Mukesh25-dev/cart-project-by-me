import "./App.css"
import { useState } from 'react'
import  { useEffect } from 'react'
import NavBar from "./components/NavBar"



const App = () => {

  const [posts, setPost] = useState([])
  const [cart, setCart] = useState([])
  const[isModalOpen, setisModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json()
      })
      .catch((error) => {
        console.log(error)
      })
      .then((data) => {
        setPost(data)
      },[])
      
  })

  
  const addToCart = (post) => {
    if(cart.find((item) => item.id=== post.id )){
        alert("this item is already in cart")
    }else{
        setCart([...cart, post])
    }
  }


  const handleCart = () =>{
    setisModalOpen(!isModalOpen)
  };

  const handleClose = () => {
    setisModalOpen(false)
  }


  const handleRemove = () => {
    setCart([])
  }
  return (
    <>
      <NavBar cartCount={cart.length} handleCart={handleCart}  />


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
              <span className="close" onClick={handleClose}>
                &times;
              </span>
              { cart.length === 0 ? (
                <p>your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                   <li key={item.id}>
                      <h3>{item.title}</h3> 
                      <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
                      <button onClick={handleRemove}>Remove</button>
                   </li>
                  ))}
                </ul>
              )
              }
          </div>
        </div>
      )}
      <div className='container'>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <button onClick={() => addToCart(post)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App