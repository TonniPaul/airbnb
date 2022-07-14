import './Nav.css';
import arbnblogo from "../images/arbnblogo.svg"

function Nav(){
   return (
      <nav>
         <img src={arbnblogo} alt="logo"/>
      </nav>
   );
}

export default Nav;