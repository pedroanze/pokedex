const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5db13] to-[#f2b807] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative flex flex-col items-center">
        {/* Barra superior */}
        <div className="w-full h-20 bg-[#f5db13] shadow-md flex justify-center items-center">
          <div className="w-11/12 flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <span className="text-black text-xl font-bold font-['Karla']">Pokédex</span>
              <span className="text-black text-xl font-normal font-['Karla']">Repositorio</span>
            </div>
            <div className="text-black text-lg font-bold font-['Karla']">Creado con ❤️ por @pedroanze</div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="w-11/12 max-w-7xl flex flex-col lg:flex-row items-center gap-8 mt-16">
          {/* Imagen Pokémon */}
          <div className="relative flex justify-center items-center lg:w-1/2">
            <div className="absolute w-[300px] h-[300px] bg-gray-300 rounded-full lg:w-[400px] lg:h-[400px]"></div>
            <img
              className="w-[200px] lg:w-[300px] absolute top-0 left-0 origin-top-left transform rotate-[-10deg]"
              src="https://via.placeholder.com/300"
              alt="Pokémon"
            />
          </div>

          {/* Texto y botón */}
          <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
            <h1 className="text-black text-4xl lg:text-6xl font-bold font-['Karla'] tracking-wide">
              Descubre <span className="font-normal">el mundo</span> Pokémon
            </h1>
            <p className="text-black text-lg lg:text-2xl font-normal font-['Karla']">
              Explora, filtra y conoce a cada Pokémon de manera fácil y rápida. ¡Tu aventura comienza aquí!
            </p>
            <button
              className="px-8 py-3 bg-[#72d576] text-[#202020] text-lg lg:text-xl font-bold rounded-lg shadow-md hover:shadow-lg transition"
            >
              Ver Pokémon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
