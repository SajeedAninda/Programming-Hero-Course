import { useEffect, useState } from "react"
import FriendData from "./FriendData";

export default function Friends() {
    let [friends, setFriends] = useState([]);
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(res => res.json())
            .then(friends => setFriends(friends))
    }, []);
    let friendsContainerStyle={
        border:"2px solid orange",
        padding:"10px",
        borderRadius: "20px 40px"
    }
    return (
        <div style={friendsContainerStyle}>
            <h2>Total Friends: {friends.length}</h2>
            {
                friends.map(friend=><FriendData friendData={friend}></FriendData>)
            }
        </div>
    )
}