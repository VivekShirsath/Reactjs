// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
// import Body  from "./components/Body.js"
// import Menu from "./components/Menu.js"
// import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
// import { CartProvider } from "./context/cartcontext.js";


// const App = () => {
//     return (
        
//         <div className = "app">
//         <Header />
//         <Outlet />
//         </div>
        
//     )
// }

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



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router = {appRouter} />);