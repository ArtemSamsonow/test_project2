import logo from "../../assets/image/logo.svg"
function Logo () {
    return (
        <div className="logo">
            <img src={logo} className="logo__image" alt="Логотип проекта"/>
            <h1 className="logo__text">Test Project</h1>
        </div>
    )
}

export default Logo