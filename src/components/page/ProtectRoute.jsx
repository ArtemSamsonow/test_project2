
export const ProtectRoute = ({element}) => {
    if (document.cookie.indexOf("token") !== 0){
        return window.location.replace('/login')
    }
    else {
        return element
    }
}

export default ProtectRoute