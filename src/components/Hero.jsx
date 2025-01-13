import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Pikachu from "../assets/pikachu.png"; // Imagen Pikachu
import Pokebola from "../assets/pokebolas.png"; // Imagen Pokebolas

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5db13] to-[#f2b807] flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-8 mt-12 w-full px-4">
        {/* Contenedor de imágenes */}
        <div className="relative flex justify-center items-center lg:w-1/2">
          {/* Imagen de Pikachu */}
          <img
            className="w-[100%] object-contain"
            src={Pikachu}
            alt="Pikachu"
          />
          {/* Imagen de Pokebolas con efecto de levitación */}
          <img
            className="absolute w-[100%] object-contain animate-levitate"
            src={Pokebola}
            alt="Pokebolas"
          />
        </div>

        {/* Texto y botón */}
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Roboto'] tracking-wide">
            Descubre <span className="font-normal">el mundo</span> Pokémon
          </h1>
          <p className="text-black text-lg md:text-xl lg:text-2xl font-normal font-['Roboto']">
            Explora, filtra y conoce a cada Pokémon de manera fácil y rápida. ¡Tu aventura comienza aquí!
          </p>
          <button
            onClick={() => navigate("/pokedex")}
            className="px-8 py-3 bg-[#72d576] text-[#202020] text-lg md:text-xl font-bold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Ver Pokémon
          </button>
          <div className="text-black text-lg font-bold font-['Roboto']">
            Creado con ❤️ por{" "}
            <a className="" href="https://beacons.ai/pedroanze">
              @pedroanze
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
