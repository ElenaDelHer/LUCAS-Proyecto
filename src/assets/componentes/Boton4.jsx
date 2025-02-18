import { useState } from "react";
import audioFile from "./audios/Lucas4.mp3" 
const Boton4 = () => {
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
          src="https://latam.aetn.com/THC/noticias/18.07.N1.LluviaDiamantes.jpg"
          className="img-b4"
          alt="Imagen de Lluvia de Diamantes"
        />
      )}
      <button className="boton-4" onClick={handleClick}>
        {foto ? "Ocultar para ver el siguiente" : "Pulsa el botón"}
      </button>
    </div>
  );
};

export default Boton4;