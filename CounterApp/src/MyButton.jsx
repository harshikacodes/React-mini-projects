import React from "react";

function MyButton({text, onClick, disabled, className = ""}){
    return(
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`px-4 py-2 rounded-lg transition ${className}`}>
            {text}
        </button>
    );
}

export default MyButton;