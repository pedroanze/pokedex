
# Pokédex 2025 🕹️

Pokédex 2025 es una aplicación web interactiva que te permite explorar, buscar y filtrar información sobre Pokémon. Desde su tipo y estadísticas hasta habilidades y detalles visuales, este proyecto es ideal para cualquier fan de Pokémon que desee tener todo al alcance de un clic. 🚀

## 🚀 **Características principales**

- **Lista de Pokémon:** Explora una lista de hasta 400 Pokémon, con imágenes y detalles.
- **Búsqueda dinámica:** Encuentra Pokémon fácilmente escribiendo su nombre en el buscador.
- **Filtros avanzados:** Filtra Pokémon por tipo, rango de ataque o defensa, y combínalos para personalizar tus resultados.
- **Detalles interactivos:** Haz clic en un Pokémon para ver información detallada en un modal.
- **Animaciones y diseño moderno:** La aplicación incluye transiciones suaves y un diseño atractivo, adaptado para todas las pantallas.
- **Paginación y carga eficiente:** Gestiona grandes cantidades de datos sin afectar el rendimiento.

## 🌐 **Demo en vivo**
Prueba la aplicación en vivo: [Pokédex 2025](https://pokedex-2025.vercel.app/pokedex)

## 📦 **Clonación del proyecto**

Para probar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/pedroanze/pokedex.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd pokedex
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y define la URL base de la API de Pokémon:
   ```env
   REACT_APP_API_URL=https://pokeapi.co/api/v2
   ```
5. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
6. Abre la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).

## 🛠️ **Tecnologías utilizadas**

- **Frontend:**
  - React.js
  - Tailwind CSS
  - React Router
- **API:** [PokéAPI](https://pokeapi.co/)
- **Despliegue:** Vercel

## ⚙️ **Estructura del proyecto**

```
├── src
│   ├── assets            # Imágenes y recursos estáticos
│   ├── components        # Componentes reutilizables (Navbar, SearchBar, PokemonCard, etc.)
│   ├── pages             # Páginas principales (Pokedex, Hero)
│   ├── services          # Lógica de comunicación con la API
│   ├── utils             # Utilidades como colores por tipo
│   ├── App.js            # Componente principal
│   └── index.js          # Punto de entrada
├── public                # Archivos públicos
├── .env                  # Variables de entorno
└── package.json          # Dependencias y scripts
```

## 🎨 **Diseño y estilo**
- **Diseño:** Diseñado cuidadosamente con Tailwind CSS para garantizar responsividad y un estilo moderno.
- **Animaciones:** Incluye efectos sutiles como hover, escalado y levitación para mejorar la experiencia visual.

## 📄 **Funcionalidades clave**

1. **Lista de Pokémon:**
   - Carga Pokémon desde la PokéAPI y muestra sus imágenes oficiales y nombres.
   - Paginación para gestionar grandes cantidades de datos.
   
2. **Búsqueda y filtrado:**
   - Búsqueda dinámica basada en el nombre del Pokémon.
   - Filtrado por tipos y rangos de ataque y defensa con un diseño intuitivo.

3. **Modal interactivo:**
   - Muestra detalles como habilidades, altura, peso, experiencia y estadísticas específicas (HP, ataque, defensa, etc.).
   - Efectos visuales y diseño responsivo.

## 🤝 **Contribuciones**
Si deseas contribuir al proyecto:
1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza un pull request una vez finalizados los cambios.

## 📋 **To-Do**
- Mejorar la carga con lazy loading para listas extensas.
- Añadir gráficos avanzados para estadísticas de Pokémon.
- Soporte para idiomas adicionales.

## ✨ **Créditos**
- Proyecto creado por [@pedroanze](https://beacons.ai/pedroanze) con ❤️ y dedicación.
- Inspirado por el universo Pokémon.

---

¡Explora el mundo Pokémon con Pokédex 2025! 👾
