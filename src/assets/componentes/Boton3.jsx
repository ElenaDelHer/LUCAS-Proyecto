import { useState } from "react";
import audioFile from "./audios/Lucas.mp3" 
const Boton3 = () => {
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
          src="https://www.mundoprimaria.com/wp-content/uploads/2022/05/Lunas-Saturno.jpg"
          className="img-b3"
          alt="Imagen de Lunas de Saturno"
        />
      )}
      
      
      <button className="boton-3" onClick={handleClick}>
        {foto ? "Ocultar para ver el siguiente" : "Pulsa el botón"}
      </button>
    </div>
  );
};

export default Boton3;