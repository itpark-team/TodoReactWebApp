const getTokenFromLS = () => {
    let token = window.localStorage.getItem("token");

    function changeToken(token: string): void {
        window.localStorage.setItem("token", token)
    }

    return [token, changeToken];
}

export default getTokenFromLS();