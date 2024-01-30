function Button ({children, type, size, onClick}) {
    return (
        <button type={type} className={`button ${size}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button