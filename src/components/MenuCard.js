
export const MenuCard = (props) => {
    console.log(props?.card?.card)
    let itemsArray = props?.card?.card?.itemCards;
    const categoryArray =props?.card?.card?.categories?.map(({title,itemCards}) =>  [title,itemCards]);
    return (
        <>
        <h3>{props.card.card.title}</h3>
         { itemsArray?.map(({card}) => {
            return (
                <div className= "menu_details">
                    <div className= "menu_info" key = {card.info.imageId}>
                        <div className= "menu_info_name">{card.info.name}</div>
                        <div className= "menu_info_price">₹{card.info.price/100}</div>
                        <div className = "menu_info_description">{card.info.description}</div>
                    </div>
                    {card.info.imageId ?<img className="menu_image" src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ card.info.imageId}/> : <div className = "alt" >No image</div>}
                </div>
            )})
            //     categoryArray[1]?.map(({card}) => {
            //         return (
            //             <div className= "menu_details">
            //                 <div className= "menu_info" key = {card.info.imageId}>
            //                     <div className= "menu_info_name">{card.info.name}</div>
            //                     <div className= "menu_info_price">₹{card.info.price/100}</div>
            //                     <div className = "menu_info_description">{card.info.description}</div>
            //                 </div>
            //                 {card.info.imageId ?<img className="menu_image" src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ card.info.imageId}/> : <div className = "alt" >No image</div>}
            //             </div>
            //         )})
               
                
            }
            
            <div className="border"></div>
        </>
    )
};