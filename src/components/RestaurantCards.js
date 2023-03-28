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
  };

  export default RestaurantCards;