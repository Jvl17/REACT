import './basquete.css'
import React, { useState, useEffect } from 'react';
import teamsData from '../../teams.json';
import scheduleData from '../../schedule.json';

function Basquete() {
    const [teams, setTeams] = useState([]);
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        // Carregar times do arquivo JSON
        setTeams(teamsData.teams);

        // Carregar cronograma de jogos do arquivo JSON
        setSchedule(scheduleData.schedule.map(game => ({
            homeTeam: teamsData.teams.find(team => team.id === game.homeTeamId),
            awayTeam: teamsData.teams.find(team => team.id === game.awayTeamId),
            homeScore: game.homeScore,
            awayScore: game.awayScore,
            date: game.date,
            location: game.location
        })));
    }, []);

    // Função para simular uma temporada completa
    function simulateSeason() {
        // Reset schedule
        setSchedule([]);

        // Simular jogos da temporada
        const simulatedSchedule = [];

        for (let i = 0; i < scheduleData.schedule.length; i++) {
            const game = scheduleData.schedule[i];
            const homeTeam = teamsData.teams.find(team => team.id === game.homeTeamId);
            const awayTeam = teamsData.teams.find(team => team.id === game.awayTeamId);
            const homeScore = Math.floor(Math.random() * 120);
            const awayScore = Math.floor(Math.random() * 120);

            simulatedSchedule.push({
                homeTeam,
                awayTeam,
                homeScore,
                awayScore,
                date: game.date,
                location: game.location
            });
        }

        setSchedule(simulatedSchedule);
    }

    return (
        <div className="App">
            <h1>Simulação de Temporada da NBA</h1>

            <button onClick={simulateSeason}>Simular Temporada</button>

            <nav className="navtable">
                <h2><span>Cronograma Simulado de Jogos</span></h2>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Casa</th>
                            <th>Placar Casa</th>
                            <th>Visitante</th>
                            <th>Placar Visitante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((game, index) => (
                            <tr key={index}>
                                <td className='date'>{game.date}</td>
                                <td>{game.location}</td>
                                <td>{game.homeTeam.full_name}</td>
                                <td>{game.homeScore}</td>
                                <td>{game.awayTeam.full_name}</td>
                                <td>{game.awayScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </nav>
        </div>
    );
}

export default Basquete;