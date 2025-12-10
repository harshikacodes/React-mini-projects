import React from "react";

function MyButton({text, onClick, disabled, className = ""}){
    return(
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${className}`}>
            {text}
        </button>
    );
}

export default MyButton;