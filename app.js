const parent = React.createElement("div",{
    id : "parent"

},
[React.createElement("div",{
    id:"child"
},[React.createElement("h1",{},"hello"),
React.createElement("h2",{},"hello") 
]),

React.createElement("div",{
    id:"child"
},[React.createElement("h1",{},"hello"),
React.createElement("h2",{},"hello") 
])

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);