import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body  from "./components/Body.js"
import Menu from "./components/Menu.js"
import { BrowserRouter , Routes , Route} from "react-router-dom";
import { CartProvider } from "./context/cartcontext.js";
import {LocationProvider} from './context/Locationcontext.js';
import {RestauarantProvider} from './context/Restaurantcontext.js'
import { Cart } from "./components/Cart.js";
import { Location } from "./components/Location.js";

 function App() {
    return (
      <div className="app">
        <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/body" element={<Body />} /> 
          <Route path="/Relevance" element={<Body/>} />
          <Route path="/Cost: High to Low" element={<Body/>} />
          <Route path="/Cost: Low to High" element={<Body/>} />
          <Route path="/Ratings" element={<Body/>} />
          <Route path="/Delivery Time" element={<Body/>} />
          <Route path="/restaurants/:id" element={<Menu/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    );
  }

// const appRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <App />,
//         children : [
//             {
//                 path : "/",
//                 element : <Body />,
//             },
//             {
//                 path : "/DELIVERY_TIME",
//                 element: <Body url = {"DELIVERY_TIME"}/>
//             },
//             {
//                 path : "/Relevance",
//                 element: <Body />
//             },
//             {
//                 path : "/Ratings",
//                 element: <Body />
//             },
//             {
//                 path : "/High_To_Low",
//                 element : <Body />
//             },
//             {
//                 path : "/Low_To_High",
//                 element : <Body />
//             },
//             {
//                 path : "/restaurants/:id",
//                 element : <Menu />
//             }

//         ],
//     },
// ])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( 
<BrowserRouter>
<LocationProvider>
  <RestauarantProvider>
 <CartProvider>
 <App />
 </CartProvider>
 </RestauarantProvider>
 </LocationProvider>
  </BrowserRouter>
  );