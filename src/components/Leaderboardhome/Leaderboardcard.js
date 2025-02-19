"use client";
import { useState } from 'react';
import styles from './page.module.css'; // Importing the CSS module for styling

const Leaderboardcard = () => {
    const [leaderboardData] = useState([
        { rank: 1, name: 'Alice', score: 1200 },
        { rank: 2, name: 'Bob', score: 1100 },
        { rank: 3, name: 'Charlie', score: 1050 },
        { rank: 4, name: 'David', score: 950 },
        { rank: 5, name: 'Eva', score: 900 },
        { rank: 6, name: 'Frank', score: 850 },
    ]);
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Leaderboard</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr key={index} className={styles.row}>
                            <td>{user.rank}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboardcard;
