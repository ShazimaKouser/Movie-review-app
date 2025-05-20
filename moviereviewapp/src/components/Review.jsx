
const Review = ({ text, timestamp }) => (
  <div className="review-card">
    <p className="review-text">{text}</p>
    <small className="review-timestamp">{timestamp}</small>
  </div>
);

export default Review;
