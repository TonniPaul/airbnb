import './Courosel.css';


import star from "../images/star.svg"

function Courosel(props){
   let badgeText
   if(props.item.openSpot === 0){
      badgeText= "SOLDOUT"
   } else if (props.item.country === "Lagos"){
      badgeText = "LAGOS"
   } ;

   return (
      <div className="slide">
            {badgeText && <div className='badge'> {badgeText}</div>}
            <img src={ props.item.img} alt="img1" className='rtdimg'/>
            <div className="ratings">
               <img src={ star } alt='star' className='star'/>
               <span>{props.item.rating}</span>
               <span className='grey'>({props.item.reviewCount}) *</span>
               <span className='grey'>{props.item.country}</span>
            </div>

            <p >{props.item.title} </p>
            <p> <span className='black'> From ${props.item.price}  </span>/ person</p>
      </div>
   );
}

export default Courosel;