import { useEffect, useState } from "react";
import { restaurantsList } from "../data.js";
import RestaurantCards  from "./RestaurantCards.js";
import {Shimmer} from "./Shimmer";
import Skeleton from 'react-loading-skeleton'




const filterData = (strText,restaurants) => 
    restaurants.filter((restaurant) => restaurant?.data?.data?.name.toLowerCase().includes(strText.toLowerCase()));

    const ErrorMesage = () => {
        return (
            <h3>No Restauarant found </h3>
        )
    }
    

const Body = () => {
    const [strText ,setStrText] = useState("");
    const [allrestaurants ,setAllRestaurants] = useState([]);
    const [filterRestaurants , setFilterRestaurants] = useState();
    
     useEffect(() => {
      getRestaurants();
     },[])

     const getRestaurants = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0776598&lng=72.8837116&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
        const json = await data.json();
        console.log(json.data.cards);    
        setAllRestaurants(json?.data?.cards);
        setFilterRestaurants(json?.data?.cards);
     }

     console.log("render");

    return allrestaurants.length === 0 ? (<Shimmer />) :(
        <>
        <div className="search-container">
            <input type ="text"
            className = "search-input"
            value = {strText}
            placeholder="Enter Restaurant Name"
            onChange = {(e) => setStrText(e.target.value)}/>
            <button className="search-btn"
             onClick={() => {
                const data = filterData(strText,allrestaurants);
                setFilterRestaurants(data);
            }}>Search</button>
        </div>

       <div className = 'list'>
        {
            filterRestaurants.length === 0 ? <ErrorMesage /> :
            filterRestaurants.map(restaurant => {
                return <RestaurantCards  {...restaurant.data.data}/>
            })
        }
       </div>
       </>
    )
  };

  export default Body;