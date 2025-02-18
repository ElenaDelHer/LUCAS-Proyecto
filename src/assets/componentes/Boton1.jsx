import { useState } from "react";
import audioFile from "./audios/Lucas2.mp3" 
const Boton1 = () => {
  const [foto, setFoto] = useState(false);
  
 
  const [audio] = useState(new Audio(audioFile));;
  
  
  const handleClick = () => {
    setFoto(!foto); 
    if (!foto) {
      audio.play(); 
    }
  };

  return (
    <div>
    
      {foto && (
        <img
          src="https://www.mundoprimaria.com/wp-content/uploads/2020/03/Sistema-Solar-Castellano.jpg"
          className="img-b1"
          alt="Imagen del Sistema Solar"
        />
      )}
      
      
      <button className="boton-1" onClick={handleClick}>
        {foto ? "Ocultar para ver el siguiente" : "Pulsa el botón"}
      </button>
    </div>
  );
};

export default Boton1;