function Button (onClickHandler,buttonText,type,postObj) {
    return(
        <> 
    <button disabled={postObj > 140} onClick={onClickHandler} className = {`buttonStyle ${type}`}>{buttonText}</button>
    </>
    )
}

export default Button