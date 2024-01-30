import {Link} from "react-router-dom";
import Button from "../elements/Button.jsx";
import Input from "../elements/Input.jsx";
import {EMAIL_VALIDATOR, PASSWORD_VALIDATOR} from "../../utilits/constants.js";
import Logo from "../elements/Logo.jsx";
import {signIn} from "../../redux/actions/login.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useForm} from "react-hook-form";

import BgImage from "../../assets/image/bg_auth.png"


function Login () {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: 'onChange'
    });

    const [isShowPassCheck, setIsShowPassCheck] = useState(false)
    const dispatch = useDispatch()
    const error = useSelector((state) => state.userSlice.error)

    async function onSubmit (data) {
        await dispatch(signIn(data))
        reset()
    }

    return (
        <section className="auth login">
            <img src={BgImage} className="bg__auth" alt="Задний фон авторизации"/>
            <div className="auth__login">
                <Logo/>

                <form className="login__form" name="auth__login" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="title__m">Nice to see you again</h2>

                    <Input name='email' type='email' validate={register('email', EMAIL_VALIDATOR)}  label='Email'  placeholder='Cash2000@bk.ru' errors={errors.email?.message} />

                    <Input  name='password' type={isShowPassCheck ? 'text' : "password"} validate={register('password', PASSWORD_VALIDATOR)}  label='Password'  placeholder='*********' errors={errors.password?.message}
                            child={(
                                <span className={isShowPassCheck ? "show-icon show" : 'show-icon no-show'}
                                      onClick={() => setIsShowPassCheck(!isShowPassCheck)}></span>
                            )}
                    />
                    <Button type={"submit"} size={"max"} children={"Sign In"}/>
                    {error ?
                        <span className="form__item-error error__request">Ошибка авторизации: {error}</span> : ''
                    }
                </form>

                <div className="text__register">
                    Dont have an account?
                    <Link className="link__register" to="/register">Sign up now </Link>
                </div>
            </div>
        </section>
    )
}

export default Login