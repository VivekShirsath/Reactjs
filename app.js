import React from "react";
import ReactDOM from "react-dom/client";


const heading1 =  (
<h1 id="hi">
    Hello Everyone
    </h1>
);

const Header = () => {
    return (
        <div>
            {heading1}
            <h2>This is h2 tag</h2>
            <h3>This is h3 tag</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);