import React, { useState } from 'react';
const ASPECTS = ['readability', 'performance', 'security', 'documentation', 'testing'];

const FeedbackSystem = () => {
  const createInitialAspects = () =>
    ASPECTS.reduce((acc, key) => {
      acc[key] = {
        title: key[0].toUpperCase() + key.slice(1),
        upvote: 0,
        downvote: 0
      };
      return acc;
    }, {});

  const [aspects, setAspects] = useState(createInitialAspects);

  const updateVote = (aspectKey, field) => {
    setAspects((prev) => ({
      ...prev,
      [aspectKey]: {
        ...prev[aspectKey],
        [field]: prev[aspectKey][field] + 1
      }
    }));
  };

  return (
    <div className='my-0 mx-auto text-center w-mx-1200'>
      <div className='flex wrap justify-content-center mt-30 gap-30'>
        {ASPECTS.map((aspectTitle, idx) => {
          return (
            <div key={aspectTitle} className='pa-10 w-300 card'>
              <h2>{aspects[aspectTitle].title}</h2>
              <div className='flex my-30 mx-0 justify-content-around'>
                <button className='py-10 px-15' data-testid={`upvote-btn-${idx}`} onClick={() => updateVote(aspectTitle, 'upvote')}>
                  👍 Upvote
                </button>
                <button className='py-10 px-15 danger' data-testid={`downvote-btn-${idx}`} onClick={() => updateVote(aspectTitle, 'downvote')}>
                  👎 Downvote
                </button>
              </div>
              <p className='my-10 mx-0' data-testid={`upvote-count-${idx}`}>
                Upvotes: <strong>{aspects[aspectTitle].upvote}</strong>
              </p>
              <p className='my-10 mx-0' data-testid={`downvote-count-${idx}`}>
                Downvotes: <strong>{aspects[aspectTitle].downvote}</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackSystem;
