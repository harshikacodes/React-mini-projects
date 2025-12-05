import { useState } from "react";
import MyButton from "./MyButton";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter App</h2>
            <p>Count: {count}</p>

            <MyButton text="+1" onClick={() => setCount(count+1)}/>
            <MyButton text="-1" onClick={() => setCount(count-1)} disabled={count<=0}/>
            <MyButton text="Reset" onClick={() => setCount(0)}/>
        </div>
    );
}

export default Counter;