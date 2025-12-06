import { useState } from "react";
import MyButton from "./MyButton";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex item-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
                <h2 className="text-2xl font-semibold mb-4">Counter App</h2>
                <p className="text-xl font-bold mb-6">Count: {count}</p>

                <div className="flex justify-center gap-3">
                    <MyButton text="+1" onClick={() => setCount(count+1)}/>
                    <MyButton text="-1" onClick={() => setCount(count-1)} disabled={count<=0}/>
                    <MyButton text="Reset" onClick={() => setCount(0)}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;