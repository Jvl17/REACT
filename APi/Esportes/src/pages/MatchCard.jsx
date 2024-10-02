import React from 'react';
import './MatchCard.css'

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="match-info">
        <p className='data'>{match.date} - {match.time}</p>
        <p className='times'>{match.homeTeam} {match.score} {match.awayTeam}</p>
        <p className='local'>{match.location}</p>
      </div>
    </div>
  );
}

export default MatchCard;