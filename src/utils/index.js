export const fetchUsers = async (e, email, username, pass, setUser) => {
  e.preventDefault();
  try {
    let response;
    if (email) {
      response = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: pass,
          email: email,
        }),
      });
    } else {
      response = await fetch(`http://localhost:5000/users/${username}`);
    }
    const data = await response.json();
    setUser(data.user);
  } catch (err) {
    console.log(err);
  }
};

export const addMovie = async (username, title, year, image) => {
  try {
    const response = await fetch(`http://localhost:5000/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        user: username,
        year: year,
        image: image,
      }),
    });
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (e, email, pass, username, setEmail, setPass) => {
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
