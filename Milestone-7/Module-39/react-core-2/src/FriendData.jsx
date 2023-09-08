export default function FriendData({ friendData }) {
    let { name, email } = friendData;
    let friendsContainerStyle = {
        border: "2px solid red",
        padding: "10px",
        borderRadius: "20px 40px",
        marginTop: "20px"
    }
    return (
        <div style={friendsContainerStyle}>
            <h3>Friends Name: {name}</h3>
            <h3>Friends Email: {email}</h3>
        </div>
    )
}