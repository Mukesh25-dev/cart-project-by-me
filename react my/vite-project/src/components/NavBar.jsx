import { useState } from "react";
import "./NavBar.css"
const NavBar = ({cartCount,handleCart}) => {


    const[count, setCount] = useState()


  return (
    <div className="navbar">
      <h1>Fake Store</h1>
      <button onClick={handleCart}>cart({cartCount})</button>
    </div>
  );
};

export default NavBar;



