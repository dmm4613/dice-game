import React from 'react';

export const Game = props => {
  const { yourChoice, AIChoice } = props.results;

  if (yourChoice > AIChoice) {
    return <h2 className='won'>You Won!</h2>;
  } else if (AIChoice > yourChoice) {
    return <h2 className='lost'>You Lost!</h2>;
  } else if (yourChoice === '' && AIChoice === null) {
    return <h2>Start Game!</h2>;
  } else {
    return <h2 className="draw">Draw</h2>;
  }
};