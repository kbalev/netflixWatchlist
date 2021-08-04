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

export const addMovie = async (username, title, year, image) =>{
    try {
        const response = await fetch(`http://localhost:5000/movies`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                user: username,
                year: year,
                image: image
            })
        })
        const data = await response.json()
        console.log(data.message)
    } catch (error) {
        console.log(error)
    }
}

export const updateStatus = async (username, title) =>{
    try {
        const response = await fetch(`http://localhost:5000/movies/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: username,
                title: title
            })
        })
        const data = await response.json()
        console.log(data.message)
    } catch (err) {
        console.log(err)
    }
}

export const removeMovie = async(username, title) =>{
    try {
        const response = await fetch(`http://localhost:5000/movies`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: username,
                title: title
            })
        })
        const data = await response.json()
        console.log(data.message)
    } catch (err) {
        console.log(err)
    }
}