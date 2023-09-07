export default function Singers({ name, age, gender, net_worth }) {
    let singersStyle = {
        border: "2px solid orange",
        borderRadius: "20px",
        padding: "10px",
        fontSize: "18px",
        marginBottom: "20px"
    }
    return (
        <div>
            <div style={singersStyle}>
            <h2>Singer Name: {name}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Age: {age}</h2>
            <h2>Net Worth: {net_worth}</h2>
        </div>
        </div>
    )
}