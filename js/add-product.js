let user = JSON.parse(sessionStorage.user || null);

window.onload = () => {
    if(user == null){
        location.replace('/login')
    }
}