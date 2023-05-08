import { useEffect, useState } from "react";
import { restaurantsList } from "../data.js";
import RestaurantCards  from "./RestaurantCards.js";
import {Shimmer} from "./Shimmer.js"
import {Link} from "react-router-dom";
import {useLocation} from '../context/Locationcontext.js';
import {useRestaurant} from '../context/Restaurantcontext.js';
import {Header} from './Header';


const filterData = (strText,restaurants) => 
    restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(strText.toLowerCase()));

    const ErrorMesage = () => {
        return (
            <h3>No Restauarant found </h3>
        )
    }
    

    const Body = () => {
       const [strText ,setStrText] = useState("");
        const {result} = useLocation();
        const {allrestaurants,filterRestaurants,getRestaurants,dispatch,sort,search} = useRestaurant();

        useEffect(() => {
            getRestaurants(result);
           },[]);
           
        console.log("inside body")
          //  &sortBy=${val}

          const filter = (text) => {
            
            if(text === "Delivery Time"){
                   return filterRestaurants?.sort((a,b) => a.data?.deliveryTime - b.data?.deliveryTime);
                  }
                  else if(text === "Ratings"){
                    return (filterRestaurants?.sort((a,b) => b.data?.avgRating - a.data?.avgRating));
                   
                  }
                  else if(text === "Cost: Low to High"){
                    return (filterRestaurants?.sort((a,b) => a.data?.costForTwo
                    - b.data?.costForTwo
                    ));
                    
                  }
                  else if(text === "Cost: High to Low"){
                    return (filterRestaurants?.sort((a,b) => b.data?.costForTwo
                    - a.data?.costForTwo
                    ));
                  }
                 } 

        const restaurants = sort?.length > 0 ? filter(sort[0]) : filterRestaurants; 

        const searchedRestaurants = search.length > 0 ? restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(search.toLowerCase())) : restaurants;
       
        
        
    return (
        <>
         <Header />
        <div className="search-container">
            <input type ="text"
            className = "search-input"
            value = {strText}
            placeholder="Enter Restaurant Name"
            onChange = {(e) => setStrText(e.target.value)}/>
            <button className="search-btn"
             onClick={() => dispatch({type : "SearchFilter",payload : strText})}>Search</button>
        </div>
    
        <div className="sorting">
        <div className = "length">16 Restaurants</div>
        <div className = "sorting-names">
            {/* <Link to = "/Relevance"><div onClick = {() => 
               filter("RELEVANCE")}>
                Relevance</div></Link> */}
                <div class = "filters" onClick = {() => dispatch({type : "Filter",payload : "Delivery Time"})}>
                    Delivery Time</div>
                <div class = "filters"  onClick = {() => dispatch({type : "Filter",payload : "Ratings"})}>
                Ratings
                </div>
                <div class = "filters" onClick = {() => dispatch({type : "Filter",payload : "Cost: Low to High"})}>
                    Cost: Low to High
                    </div>
                <div class = "filters"onClick = {() => dispatch({type : "Filter",payload : "Cost: High to Low"})}>
                    Cost: High to Low
                    </div>
        </div>
    </div>
       <hr></hr>
      <div className = 'list'>
        {
            allrestaurants?.length === 0 ? (<Shimmer />) :
            searchedRestaurants?.length === 0 ? <ErrorMesage /> :
            searchedRestaurants?.map(restaurant => {
                return <Link to = {"/restaurants/" + restaurant.data.id} key = {restaurant.data.id}>
                    <RestaurantCards  {...restaurant.data} /></Link>
            })
        }
       </div>
        </>
    )
  };
  export default Body;