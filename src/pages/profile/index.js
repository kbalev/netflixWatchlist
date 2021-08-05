import styled from "styled-components";
import { ProfileContainer } from "../../styledComponents";
import React, {Component, useState, useEffect} from 'react';
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";
import { updateStatus } from "../../utils";



export const Profile = ({user, setUser}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({ error: false, message: "" });
    useEffect(() => {
        handleFetch();
      }, []);
    
    
    



    
    const handleFetch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users`);
            if (response.status !== 200) {
                throw new error('Oops something went wrong')
            } else if (response.status == 200) {
                const data = await response.json();
                setEmail(data.items);
                console.log(email)
                setPass(data.items);
                console.log(pass)
            }
        } catch (error) {
            setError({error:true, message: error.message})
        }
    }

    if (error.error) {
        return <h1>An error has occured: {error.error}</h1>
    } else {
        console.log(pass)
        
    }
    return (
        <ProfileContainer> 
            <div className="ProfileContainer">
              <h1> Account Details </h1>
               <AccountForm>
                   
                   <label>
                        Username:
                        <input type= "text" placeholder={username} username= {username}
                        onChange={e=> setUsername(e.target.value)} />
                    </label>
                   <label>
                       Email:
                       <input type="text" placeholder={email} email= {email}
                       onChange={e=> setEmail(e.target.value)} />
                    </label>
                    
                    <label>
                        Password:
                        <input type= "text" placeholder= {pass} password= {pass}
                        onChange= {e=> setPass(e.target.value)}/>
                     </label>
                     <button type='button' onClick={e=>{updateStatus(e, pass, email, username)}}> 
                        Add to Profile 
                    </button>

               </AccountForm>
            </div>
        </ProfileContainer>
    )

}
const AccountForm = styled.div`
    width: 100vw;
    height: 100vh;
`