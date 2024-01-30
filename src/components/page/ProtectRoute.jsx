

export const ProtectRoute = ({element}) => {
    if (document.cookie.indexOf("token") !== 0){
        return window.location.replace('/test_project2/login')
    }
    else {
        return element
    }
}

export default ProtectRoute