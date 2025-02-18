import { useState } from "react";
import audioFile from "./audios/Lucas3.mp3" 
const Boton2 = () => {
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
          src="https://cdn.pixabay.com/photo/2022/06/04/16/35/saturn-7242341_640.jpg"
          className="img-b2"
          alt="Imagen de Saturno"
        />
      )}
      
   
      <button className="boton-2" onClick={handleClick}>
        {foto ? "Ocultar para ver el siguiente" : "Pulsa el botón"}
      </button>
    </div>
  );
};

export default Boton2;