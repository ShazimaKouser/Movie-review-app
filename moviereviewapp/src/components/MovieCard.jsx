// const MovieCard = ({ poster, title, children }) => (
//     <div className="p-4 bg-white shadow rounded-xl w-72 m-4">
//       <img src={poster} alt={title} className="w-full h-96 object-cover rounded" />
//       <h2 className="text-xl font-bold mt-2">{title}</h2>
//       {children}
//     </div>
//   );
  
//   export default MovieCard;
const MovieCard = ({ title, poster, children }) => (
  <div className="movie-card">
    <img src={poster} alt={title} className="movie-poster" />
    <div className="movie-content">
      <h2 className="movie-title">{title}</h2>
      {children}
    </div>
  </div>
);

export default MovieCard;
