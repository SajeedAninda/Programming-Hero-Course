import { useState } from "react"

export default function Players() {
    let [player, setPlayer] = useState(11);

    let handleIncrease = () => {
        let newPlayer = player + 1;
        setPlayer(newPlayer);
    }
    let handleDecrease = () => {
        let decNewPlayer = player - 1;
        setPlayer(decNewPlayer)
    }
    let playerStyle={
        border: "2px solid orange",
        padding:"10px",
        borderRadius:"20px"
    }
    return (
        <div style={playerStyle}>
            <h2>Total Players: {player}</h2>
            <button onClick={handleIncrease}>Increase Players</button>
            <button onClick={handleDecrease}>Increase Players</button>
        </div>
    )
}