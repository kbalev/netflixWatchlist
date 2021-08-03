export const fetchUsers = async (e, email, username, pass, setUser) =>{
    e.preventDefault();
    try {
        let response;
        if (email){
            response = await fetch(`http://localhost:5000/users`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: pass,
                    email: email
                })
            })
        } else {
            response = await fetch(`http://localhost:5000/users/${username}`)
        }
        const data = await response.json();
        setUser(data.user.username)
    } catch (err) {
        console.log(err)
    }
    
}
