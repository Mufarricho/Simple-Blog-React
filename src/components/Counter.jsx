import { useState } from "react";


function Counter() {
    const [count,setCount]=useState(0)

    function Increment() {
        setCount(count+1)
    }

    function Reduce() {
        setCount(count-1)
    }
    return (
        <>
            <button onClick={Increment}>+</button>
            <div>{count}</div>
            <button onClick={Reduce}>-</button>
            <br/>
        </>
    )
}

export default Counter;