import React from 'react';

export const Ranking = props => {
  if (props.yourChoice > props.AIChoice) {
    props.wins.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws: {' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.AIChoice > props.yourChoice) {
    props.losses.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws: {' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.yourChoice === props.AIChoice) {
    props.draws.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws: {' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.yourChoice === '' && props.AIChoice === null) {
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws: {' '}
        {props.draws.length}
      </h2>
    );
  } else {
    return null;
  }
};