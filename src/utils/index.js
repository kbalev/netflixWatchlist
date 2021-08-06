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
            response = await fetch(`http://localhost:5000/users/${username}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: pass
                })
            })
        }
        const data = await response.json();
        localStorage.setItem("MyToken", data.token)
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
        const response = await fetch(`http://localhost:5000/movies/`, {
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

export const authUser = async (setUser) =>{
    if (localStorage.MyToken) {
        try {
            const response = await fetch(`http://localhost:5000/users`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("MyToken")}`
                }
            })
            const data = await response.json();
            console.log(data)
            setUser(data.username)
        } catch (err) {
            console.log(err)
        }
        
    }
    
}

export const updateUsers = async (e, email, pass, username, setEmail, setPass) => {
    e.preventDefault();
    try {
      let response;
      if (email) {
        response = await fetch(`http://localhost:5000/users`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: pass,
            email: email,
            username: username,
          }),
        });
      } else {
        response = await fetch(`http://localhost:5000/users/${email}`);
      }
      const data = await response.json();
      setEmail(data.updateUserEmail);
      setPass(data.updateUserEmail);
     
    } catch (err) {
      console.log(err);
    }
  };
  

