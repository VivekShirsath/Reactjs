import React from "react";
import ReactDOM from "react-dom/client";
import data, { restaurants } from "./data.js";



  const Header = () => {
    return(
        <div className="header">
            <img src = "https://tse2.mm.bing.net/th?id=OIP.ozjDVpc_zk86CCU00X4QPgAAAA&pid=Api&P=0" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>

        </div>
    )
  }
  const RestaurantCards = ({name,cuisines,cloudinaryImageId,deliveryTime}) => {  
    return (
        <div className = "cards">
        <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId
    }/>
        <div className = "name">{name}</div>
        <div className = "cuisine">{
            cuisines.join(" ")
        }</div>
        <div className = "ratings">
          {deliveryTime} Minutes
        </div>
    </div>
    )
  }

  const Body = () => {
    return (
       <div className = 'list'>
        {
            restaurants.map(restaurant => {
                return <RestaurantCards  {...restaurant.data} key ={restaurant.data.parentId}/>
            })
        }
       {/* <RestaurantList restaurant = {restaurants[0]}/>
       <RestaurantList restaurant = {restaurants[1]}/>
       <RestaurantList restaurant = {restaurants[2]}/>
       <RestaurantList restaurant = {restaurants[3]}/>
       <RestaurantList restaurant = {restaurants[4]}/> */}
       </div>
    )
  }

const App = () => {
    return (
        <div className = "app">
        <Header />
         <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);