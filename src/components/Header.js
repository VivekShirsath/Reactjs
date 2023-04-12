import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const Header = () => {
    const [isLogged,setIsLogged] = useState(true);
    return(
        <div className="header">
            <Link to = "/"><img src = "https://tse2.mm.bing.net/th?id=OIP.ozjDVpc_zk86CCU00X4QPgAAAA&pid=Api&P=0" /></Link>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>
            {isLogged ? <button className = "log"onClick = {() => setIsLogged(false)}>Log Out</button> : <button className = "log" onClick = {() => setIsLogged(true)}>Log In</button>}
        </div>
    )
  };

  export default Header;