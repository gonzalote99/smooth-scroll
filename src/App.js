import React, {useEffect, useState} from "react";
import Scroll from './SmoothScroll';
import "./style.css";


 function App() {
   const [images, setImages] = useState();

   useEffect(() => {
     fetch('https://picsum.photos/v2/list?limit=10').then(res => res.json())
     .then(json => {
       setImages(json)
     })
   },[])

   const random = () => {
     return Math.floor(Math.random()* 50);
   }



  return (
    <div className="App">
       <h1 className="title">smooth scroll</h1>
       <Scroll />
       {
         images && images.map(
           img => <div style={{marginLeft:`${random()}rem`}} key={img.id} className="imgContainer" >
            <img src={img.download_url} alt={img.author} /> 

           </div>
         )
       }
    </div>
  );
}

export default App;