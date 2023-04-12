import { useEffect, useState } from "react";
import { restaurantsList } from "../data.js";
import RestaurantCards  from "./RestaurantCards.js";
import {Shimmer} from "./Shimmer.js"
import {Link} from "react-router-dom";


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
    const [ val ,setVal] = useState("RELEVANCE");
    
     useEffect(() => {
      getRestaurants();
     },[val]);

     
     const getRestaurants = async(url) => { 
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0776598&lng=72.8837116&offset=15&sortBy=${val}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards);
        setFilterRestaurants(json?.data?.cards);  
     }

    
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
                const data = filterData(strText,allrestaurants);
                setFilterRestaurants(data);
            }}>Search</button>
        </div>
    
        <div className="sorting">
        <div className = "length">16 Restaurants</div>
        <div className = "sorting-names">
            <Link to = "/Relevance"><div onClick = {() => 
               setVal("RELEVANCE")}>
                Relevance</div></Link>
            <Link to = "/DELIVERY_TIME">
                <div onClick = {() => setVal("DELIVERY_TIME")}>
                    Delivery Time</div></Link>
            <Link to = "/Ratings">
                <div onClick = {() => setVal("RATING")}>
                Ratings
                </div>
                </Link>
            <Link to = "/Low_To_High">
                <div onClick = {() => setVal("COST_FOR_TWO")}>
                    Cost: Low to High
                    </div>
                </Link>
            <Link to = "/High_To_Low">
                <div onClick = {() => setVal("COST_FOR_TWO_H2L")}>
                    Cost: High to Low
                    </div></Link>
        </div>
    </div>
       <hr></hr>
      <div className = 'list'>
        {
            allrestaurants.length === 0 ? (<Shimmer />) :
            filterRestaurants.length === 0 ? <ErrorMesage /> :
            filterRestaurants.map(restaurant => {
                return <Link to = {"/restaurants/" + restaurant.data.data.id} key = {restaurant.data.data.id}>
                    <RestaurantCards  {...restaurant.data.data} /></Link>
            })
        }
       </div>
       </>
    )
  };
  export default Body;