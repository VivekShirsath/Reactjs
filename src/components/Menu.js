import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useState} from "react";
import {Shimmer} from "./Shimmer.js"
import { MenuCard } from "./MenuCard.js";



const Menu = () => {
    const {id} = useParams();
    const [dynamicMenu,setDynamicMenu] = useState([]);


    useEffect(() => {
        getData();
    },[])


    const getData = async() => {
      
            const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.0776598&lng=72.8837116&restaurantId="+id;
            const data = await fetch(url);
            console.log(data);
            const json = await data.json();
           console.log(json.data.cards);
            // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.slice(1));
            if(json.data.cards.length === 3){
              setDynamicMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
            }
            else{
              setDynamicMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap.REGULAR.cards);
            }

        
    }

    // console.log("render");
    // console.log(dynamicMenu);

    
    
    return (!dynamicMenu) ? <Shimmer/> :(
        <div className="menu">
          <h3>Menu</h3>
             {dynamicMenu?.map(ele => {
               return <MenuCard {...ele} />
             })} 
        </div>
    )
};

export default Menu;