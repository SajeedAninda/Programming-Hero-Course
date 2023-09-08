import { useEffect, useState } from "react"

export default function DataFetch() {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <h3>
            Name: {data.length}
        </h3>
    )
}