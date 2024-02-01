import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useState} from "react";

import Button from "../elements/Button.jsx";
import Input from "../elements/Input.jsx";
import Logo from "../elements/Logo.jsx";

import {EMAIL_VALIDATOR, PASSWORD_VALIDATOR, passwordCheckError} from "../../utilits/constants.js";
import {signUp} from "../../redux/actions/register.js";

import BgImage from "../../assets/image/bg_auth.png"

function Register() {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset, watch
    } = useForm({
        mode: 'onChange'
    });

    const [isShowPassCheck, setIsShowPassCheck] = useState(false)
    const error = useSelector((state) => state.userSlice.error)
    const dispatch = useDispatch();

    async function onSubmit(data) {
        await dispatch(signUp(data))
        reset()
    }

    return (
        <section className="auth register">
            <img src={BgImage} className="bg__auth" alt="Задний фон авторизации"/>
            <div className="auth__login">
                <Logo/>
                <form className="login__form" name="auth__register" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="title__m">We hope you will stay with us for a long time</h2>
                    <Input name='email'
                           type='email'
                           validate={register('email', EMAIL_VALIDATOR)}
                           label='Email'
                           placeholder='Cash2000@bk.ru'
                           errors={errors.email?.message}
                    />
                    <Input name='password'
                           type={isShowPassCheck ? 'text' : "password"}
                           validate={register('password', PASSWORD_VALIDATOR)}
                           label='Password'
                           placeholder='*****************'
                           errors={errors.password?.message}
                           child={(
                               <span className={isShowPassCheck ? "show-icon show" : 'show-icon no-show'}
                                onClick={() => setIsShowPassCheck(!isShowPassCheck)}>
                               </span>)}
                    />
                    <Input name='confirmPassword'
                           errors={errors.confirmPassword?.message}
                           type={isShowPassCheck ? 'text' : "password"}
                           validate={register('confirmPassword', {
                        PASSWORD_VALIDATOR, validate: (fieldValue) => {
                            return fieldValue === watch('password') || passwordCheckError
                        }
                    })}
                           label='Confirmation password'
                           placeholder='*****************'
                           child={(
                               <span className={isShowPassCheck ? "show-icon show" : 'show-icon no-show'}
                                onClick={() => setIsShowPassCheck(!isShowPassCheck)}>
                               </span>)}
                    />
                    <Button type={"submit"}
                            size={"max"}
                            children={"Sign Up"}
                    />
                    {error &&
                        <span className="form__item-error error__request">
                            Ошибка регистрации: {error}
                        </span>
                    }
                </form>
                <div className="text__register">
                    You already have an account?
                    <Link className="link__register" to="/login">Sign in now </Link>
                </div>
            </div>
        </section>)
}

export default Register