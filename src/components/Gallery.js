import './Gallery.css';
// import img1 from "../images/image1.svg"
// import img2 from "../images/image2.svg"
// import img3 from "../images/image3.svg"
// import img4 from "../images/image4.svg"
// import img5 from "../images/image5.svg"
// import img6 from "../images/image6.svg"
// import img7 from "../images/image7.svg"
// import img8 from "../images/image8.svg"
// import img9 from "../images/image9.svg"

import ggg from "../images/tgallery.svg"


function Gallery(){
   return(
      <div className='gallery'>
         {/* <img src={ img1 } alt="img1" className='image1'/>
         <img src={ img2 } alt="img1" className='image2'/>
         <img src={ img3 } alt="img1" className='image3'/>
         <img src={ img4 } alt="img1" className='image4'/>
         <img src={ img5 } alt="img1" className='image5'/>
         <img src={ img6 } alt="img1" className='image6'/>
         <img src={ img7 } alt="img1" className='image7'/>
         <img src={ img8 } alt="img1" className='image8'/>
         <img src={ img9 } alt="img1" className='image9'/> */}
         <img src={ ggg } alt="img1" className='tpg'/>
         <div className='gtext'>
            <h1>Online Experiences</h1>
            <p> Join unique interactive activities led by one-of-a-kind
               hosts—all without leaving home.
            </p>
         </div>
      </div>
   )
}

export default Gallery;