import { useState } from "react";
import MyButton from "./MyButton";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
                <h2 className="text-2xl font-semibold mb-4">Counter App</h2>
                <p className="text-xl font-bold mb-6">Count: {count}</p>

                <div className="flex justify-center gap-4 mt-10">
                    <MyButton text="+1" onClick={() => setCount(count+1)} className="bg-blue-500 text-white hover:bg-blue-600"/>

                    <MyButton text="-1" onClick={() => setCount(count-1)} disabled={count<=0}
                    className={
                        count <=0 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"
                    }/>

                    <MyButton text="Reset" onClick={() => setCount(0)} className="bg-gray-700 text-white hover:bg-gray-800"/>
                </div>
            </div>
        </div>
    );
}

export default Counter;