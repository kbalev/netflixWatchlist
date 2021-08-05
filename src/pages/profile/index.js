import styled from "styled-components";
import { ProfileContainer } from "../../styledComponents";
import React, {Component, useState, useEffect} from 'react';
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";
import { updateStatus } from "../../utils";



export const Profile = ({user, setUser}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPass, setConfirmPass] = useState(false)
    const [pass, setPass] = useState("");
    const [error, setError] = useState({ error: false, message: "" });
    
    useEffect(() => {
        handleFetch();
      }, [confirmPass]);


    const handleFetch = async () => {
        let response
        try {
            response = await fetch(`http://localhost:5000/users/${user}`, {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: user,
                    password: pass
                })
            });
            if (response.status !== 200) {
                console.log('Oops something went wrong')
            } else if (response.status == 200) {
                const data = await response.json();
                console.log(data)
                setEmail(data.user.email);
                console.log(email)
                setPass(data.user.password);
                console.log(pass)
            }
        } catch (error) {
            console.log(error)
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
                {confirmPass ? <AccountForm>
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

               </AccountForm> :
               <AccountForm>
                   <input type= 'text' placeholder='Please confirm password to proceed'/>
                   <button type='button' onClick={(e)=>setPass(e)} onClick={()=>{setConfirmPass(true)}}>Submit</button>
               </AccountForm>}
            </div>
        </ProfileContainer>
    )

}
const AccountForm = styled.div`
    width: 100vw;
    height: 100vh;
` 