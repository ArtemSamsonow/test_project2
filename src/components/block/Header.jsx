import Logo from "../elements/Logo.jsx";
import Button from "../elements/Button.jsx";


function Header () {

    function exit () {
        document.cookie = `token= ; path=/; max-age=0`
        window.location.replace('/login')
    }

    return (
        <header className="project__header">
            <Logo/>
            <Button type={"button"} onClick={() => exit()} size={"small"} children={"Exit"}/>
        </header>
    )
}

export default Header