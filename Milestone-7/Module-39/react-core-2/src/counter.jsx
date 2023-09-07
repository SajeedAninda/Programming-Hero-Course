import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);

    let handleAdd = () => {
        let newCount = count + 1;
        setCount(newCount);
    }
    let handleReduce = () => {
        let reducedCount = count - 1;
        setCount(reducedCount);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleReduce}>Decrement</button>
        </div>
    )
}