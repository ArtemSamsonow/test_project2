export const URL = 'https://reqres.in/api';

export const EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(ru|com|org|net|in)$/
export const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

export const emptyFieldErrorMessage = 'Укажите, пожалуйста, необходимые данные';
export const emailError = 'Некорректный формат E-mail';
export const passwordError = 'Пароль не может быть короче 8-ми символов';
export const passwordSpecialError = `Ваш пароль должен содержать спец. символ (!#$%&'*+/=?), 1 заглавную букву и 1 цифру`;
export const passwordCheckError = 'Пароли не совпадают';

// валидация email
export const EMAIL_VALIDATOR = {
    required: {
        value: true,
        message: emptyFieldErrorMessage,
    },
    pattern: {
        value: EMAIL,
        message: emailError,
    }
}

// валидация пароля
export const PASSWORD_VALIDATOR = {
    required: {
        value: true,
        message: emptyFieldErrorMessage,
    },
    minLength: {
        value: 8,
        message: passwordError,
    },
    maxLength: 200,
    pattern : {
        value: PASSWORD,
        message: passwordSpecialError,
    }
}