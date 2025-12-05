function MyButton({text, onClick, disabled}){
    return(
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default MyButton;