import React, { useState, useEffect } from "react";
import MatchCard from "./MatchCard"; // Componente para exibir detalhes de cada partida
import "./futebol.css";

import brasileiraoData from "../../brasileirao2024.json"; // Importar o arquivo JSON com os dados

function Futebol() {
  const [matches, setMatches] = useState([]);
  const [currentRound, setCurrentRound] = useState(1); // Estado para controlar a rodada atual
  const [totalRounds, setTotalRounds] = useState(0); // Estado para armazenar o total de rodadas disponíveis
  const [teams, setTeams] = useState([]); // Estado para armazenar os times e seus pontos acumulados até a rodada atual

  useEffect(() => {
    // Carregar os dados da primeira rodada ao iniciar
    if (brasileiraoData.brasileirao2024[`rodada${currentRound}`]) {
      setMatches(brasileiraoData.brasileirao2024[`rodada${currentRound}`]);
    }

    // Determinar o total de rodadas disponíveis
    setTotalRounds(
      Object.keys(brasileiraoData.brasileirao2024).filter((key) =>
        key.includes("rodada")
      ).length
    );
  }, [currentRound]);

  useEffect(() => {
    // Calcular pontos por time até a rodada atual
    const points = {};

    // Percorrer todas as rodadas até a atual
    for (let round = 1; round <= currentRound; round++) {
      const roundKey = `rodada${round}`;
      if (brasileiraoData.brasileirao2024[roundKey]) {
        const matchesOfRound = brasileiraoData.brasileirao2024[roundKey];

        // Atualizar pontos com base nos resultados de cada partida
        matchesOfRound.forEach((match) => {
          if (!points[match.homeTeam]) {
            points[match.homeTeam] = 0;
          }
          if (!points[match.awayTeam]) {
            points[match.awayTeam] = 0;
          }

          const [homeScore, awayScore] = match.score.split("x").map(Number);

          if (homeScore > awayScore) {
            points[match.homeTeam] += 3;
          } else if (homeScore === awayScore) {
            points[match.homeTeam] += 1;
            points[match.awayTeam] += 1;
          } else {
            points[match.awayTeam] += 3;
          }
        });
      }
    }

    // Organizar times por pontos (decrescente) e por nome (alfabética)
    const sortedTeams = Object.keys(points).sort((teamA, teamB) => {
      if (points[teamA] !== points[teamB]) {
        return points[teamB] - points[teamA];
      } else {
        return teamA.localeCompare(teamB);
      }
    });

    // Criar estrutura de times ordenada com posição e pontos acumulados até a rodada atual
    const sortedTeamsData = sortedTeams.map((teamName, index) => ({
      position: index + 1,
      name: teamName,
      points: points[teamName],
    }));

    setTeams(sortedTeamsData);
  }, [currentRound]); // Atualizar sempre que a rodada atual mudar

  const handleNextRound = () => {
    // Avançar para a próxima rodada
    if (currentRound < totalRounds) {
      setCurrentRound(currentRound + 1);
    }
  };

  const handlePrevRound = () => {
    // Retroceder para a rodada anterior
    if (currentRound > 1) {
      setCurrentRound(currentRound - 1);
    }
  };

  return (
    <nav className="body">
      <div className="navegacao">
        <h1 className="tituloCamp">Campeonato Brasileiro 2024</h1>
        <div className="navigation">
          <button onClick={handlePrevRound} disabled={currentRound === 1}>
            Rodada Anterior
          </button>
          <span>Rodada {currentRound}</span>
          <button
            onClick={handleNextRound}
            disabled={currentRound === totalRounds}
          >
            Próxima Rodada
          </button>
        </div>
      </div>
      <div className="App">
        <nav className="tabelas">
          <div className="standings">
            <h2 className="h2Margin"><span>Classificação até a Rodada {currentRound}</span></h2>
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Time</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.name}>
                    <td>{team.position}</td>
                    <td>{team.name}</td>
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="matches">
            <h2><span>Partidas da Rodada {currentRound}</span></h2>
            <div className="partidas">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Futebol;
