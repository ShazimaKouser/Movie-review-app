import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import Review from './components/Review';
import ReviewForm from './components/ReviewForm';
import withTimestamp from './components/withTimestamp';

const EnhancedReview = withTimestamp(Review);

const movies = [
  {
    title: 'Inception',
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
  },
  {
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
  },
  {
    title: 'The Dark Knight',
    poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA',
  },
  {
    title: 'Avengers: Endgame',
    poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
  },
  {
    title: 'Joker',
    poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ',
  },
  {
    title: 'Spider-Man: No Way Home',
    poster: 'https://m.media-amazon.com/images/I/71g40mlbinL._AC_SY679_.jpg',
  },
];

const App = () => {
  const [allReviews, setAllReviews] = useState({});

  const handleAddReview = (movieTitle, text) => {
    setAllReviews((prevReviews) => ({
      ...prevReviews,
      [movieTitle]: [...(prevReviews[movieTitle] || []), text],
    }));
  };

  return (
    <div className="app">
      <h1 className="app-title">🎬 Movie Review App</h1>
      <div className="movie-grid">
        {movies.map((movie, idx) => (
          <MovieCard key={idx} title={movie.title} poster={movie.poster}>
            <ReviewForm
              render={({ text, setText }) => (
                <>
                  <textarea
                    className="review-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your review..."
                  />
                  <button
                    className="submit-button"
                    onClick={() => {
                      if (text.trim()) {
                        handleAddReview(movie.title, text);
                        setText('');
                      }
                    }}
                  >
                    Submit Review
                  </button>
                </>
              )}
            />
            <div className="reviews">
              {(allReviews[movie.title] || []).map((review, i) => (
                <EnhancedReview key={i} text={review} />
              ))}
            </div>
          </MovieCard>
        ))}
      </div>
    </div>
  );
};

export default App;
