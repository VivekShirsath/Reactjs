const RestaurantCards = ({name,cloudinaryImageId,cuisines,deliveryTime}) => {
    return (
        <div className = "cards">
        <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId
    }/>
        <div className = "name">{name}</div>
        <div className = "cuisine">{
            cuisines.slice(0,2).join(" ")
        }</div>
        <div className = "ratings">
          {deliveryTime} Minutes
        </div>
    </div>
    // )
    )};

  export default RestaurantCards;