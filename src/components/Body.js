import { useState } from "react";
import { restaurantsList } from "../data.js";
import RestaurantCards  from "./RestaurantCards.js";


const filterData = (strText) => 
    restaurantsList.filter((restaurant) => restaurant.data.name.includes(strText));


const Body = () => {
    const [strText ,setStrText] = useState("");
    const [restaurants ,setRestaurants] = useState(restaurantsList);
    console.log(restaurants);

    return (
        <>
        <div className="search-container">
            <input type ="text"
            className = "search-input"
            value = {strText}
            placeholder="Enter Restaurant Name"
            onChange = {(e) => setStrText(e.target.value)}/>
            <button className="search-btn"
             onClick={() => {
                const data = filterData(strText);
                setRestaurants(data);
            }}>Search</button>
        </div>

       <div className = 'list'>
        {
            restaurants.map(restaurant => {
                return <RestaurantCards  {...restaurant.data} key ={restaurant.data.parentId}/>
            })
        }
       </div>
       </>
    )
  };

  export default Body;