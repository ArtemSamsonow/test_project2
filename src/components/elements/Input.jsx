function Input ({type, errors, child, validate, disabled, placeholder, label, onClick, value}) {
    return (
        <>
            <label className="form__label">
                <p className="form__item__title">{label}</p>
                <input
                    {...validate}
                    type={type}
                    disabled={disabled || false}
                    className={errors !== undefined ? "form__item form__error" : "form__item"}
                    placeholder={placeholder}
                    onClick={onClick}
                    value={value}
                />
                {child}
            </label>
            <span className="form__item-error">{errors}</span>
        </>
    )
}

export default Input