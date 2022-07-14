import './Courosel.css';


import star from "../images/star.svg"

function Courosel(props){
   return (
      <div className="slide">

         <div>
            <img src={ props.img} alt="img1" className='rtdimg'/>
            {/* <p className='sold'>SOLD OUT</p> */}

            <div className="ratings">
               <img src={ star } alt='star' className='star'/>
               <span>{props.rating}</span>
               <span className='grey'>({props.reviewCount}) *</span>
               <span className='grey'>{props.country}</span>
            </div>

            <p >{props.title} </p>
            <p> <span className='black'> From ${props.price}  </span>/ person</p>
         </div>
         
      </div>
   );
}

export default Courosel;