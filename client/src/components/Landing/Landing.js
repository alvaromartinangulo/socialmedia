import React from "react";
import "./Landing.css";
import Typed from 'typed.js';
import { useState } from "react";
import cap from "../Images/cap.png";
import fakegods from "../Images/fakegods.png";
import pants from "../Images/pants.png";
import shirt from "../Images/shirt.png";

const Landing = () => {
    const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);
    const[productIndex, setProductIndex] = useState(0)
    const[animation, setAnimation] = useState(0)
    const [animationOut, setAnimationOut] = useState(0)
    const products = [
        {
            category: "Hoodies",
            name:"Afterstorm \"Orange Hoodie\"",
            price: "$66,00",
            brand: "fakegodsbrand.com",
            image: fakegods
        },
        {
            category: "Pants",
            name:"Chain Splatter Jeans Light Washed",
            price: "$129,00",
            brand: "fugazi.la",
            image: pants
        },
        {
            category: "Shirts",
            name:"Club RTW football Blue Jersey",
            price: "$120,00",
            brand: "crtz.xyz",
            image: shirt
        },
        {
            category: "Caps",
            name:"ALD New Era Yankees",
            price: "$76,00",
            brand: "neweracap.com",
            image: cap
        },
    ]
    
  React.useEffect(() => {
    const options = {
    	strings: [
        'HOODIE',
        'JEANS',
        'SHIRT',
        'CAP'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      backDelay: 2000,
      preStringTyped: (arrayPos, self) => {
        setAnimation(2);
      },
      onStringTyped: (arrayPos, self) => {
        setAnimation(1);
        setProductIndex(arrayPos);

      }
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

    return (
        <div className = "container">
            <nav>
                <span class="leftallignnav">
                    <a><span className="logo">S</span></a>
                </span>
                <span class="rightallignnav">
                    <a><button className="button">Log In</button></a>
                    <a><button className="buttoninverted">Sign Up</button></a>
                </span>
            </nav>
            <div className="row">
                <div className="columnleft">
                    <div className="rectangle"></div>
                    <img
                    className="img"
                    src={`${products[productIndex].image}`}
                    onAnimationEnd={() => animation == 1 ? setAnimation(-1) : setAnimation(-2)}
                    animation ={animation}/>
                    <div className="procuctcontainer">
                        <div className="productinside">
                            <div className="category">
                                <div className="categorytext"
                                animation={animation}>{products[productIndex].category}</div></div>
                            <div className="price"
                            animation={animation}>{products[productIndex].price}</div>
                            <div className="productname"
                            animation={animation}>{products[productIndex].name}</div>
                            <div className="brand"
                            animation={animation}>{products[productIndex].brand}</div>
                        </div>
                    </div>
                </div>
                <div className="columnright">
                    <h1>STILLO.</h1>
                    <h2>FIND</h2>
                    <h2>YOUR NEW</h2>
                    <h2>FAVOURITE</h2>
                    <div className="footer">                    
                    <div className="type-wrap"><h3><span ref={el} /></h3></div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Landing;