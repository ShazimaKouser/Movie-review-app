
import React, { useState } from 'react';

const ReviewForm = ({ render }) => {
  const [text, setText] = useState('');
  return render({ text, setText });
};

export default ReviewForm;
