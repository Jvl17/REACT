import React, { useEffect, useState } from 'react';
import data from '../../Golf.json';
import './golf.css'

function Golf() {
  const [matches, setMatches] = useState(data.golf2024);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [tournament, setTournament] = useState('');

  const addMatch = () => {
    const newMatch = {
      id: matches.length + 1,
      player1,
      player2,
      date,
      time,
      location,
      tournament,
      score1: null,
      score2: null,
    };
    setMatches([...matches, newMatch]);
    resetForm();
  };

  const resetForm = () => {
    setPlayer1('');
    setPlayer2('');
    setDate('');
    setTime('');
    setLocation('');
    setTournament('');
  };

  return (
    <nav className='navGolf'>
      <div className="tabela">
        <h1><span>Golf Matches 2024</span></h1>
        <div className='divTable'>
          <table>
            <thead>
              <tr>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Tournament</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match) => (
                <tr key={match.id}>
                  <td>{match.player1}</td>
                  <td>{match.player2}</td>
                  <td>{match.date}</td>
                  <td>{match.time}</td>
                  <td>{match.location}</td>
                  <td>{match.tournament}</td>
                  <td>
                    {match.score1 ?? 'N/A'} - {match.score2 ?? 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="match">
        <h2><span>Add New Match</span></h2>
        <div className="add">
          <div className="inputs">
            <input
              type="text"
              placeholder="Player 1"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <span>X</span>
            <input
              type="text"
              placeholder="Player 2"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tournament"
              value={tournament}
              onChange={(e) => setTournament(e.target.value)}
            />
            <button onClick={addMatch}>Add Match</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Golf;