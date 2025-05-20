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
