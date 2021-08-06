import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageContainer } from "../../styledComponents"
import { updateStatus, removeMovie } from '../../utils';

export const Watchlist = (user) =>{
const [watchlist, setWatchlist] = useState([]);
const [error, setError] = useState({ error: false, message: "" });
        useEffect(() => {
            handleFetch();
          }, []);
let moviesArray;
const changeStatus = (entry) =>{
            if (entry == 'Not finished'){
                entry = 'Finished'
            } else { entry = 'Not finished'}
        }

    const handleFetch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/movies/${user.user}`);
            if (response.status !== 200) {
                throw new error('Oops something went wrong')
            } else if (response.status == 200) {
                const data = await response.json();
                setWatchlist(data.targetUser);
                console.log(watchlist)
            }
        } catch (error) {
            setError({error:true, message: error.message})
        }
    }
    
    if (error.error) {
        return <h1>An error has occured: {error.error}</h1>
    } else {
        moviesArray = [...watchlist]
        console.log(moviesArray)
    }


    return(
        <PageContainer>
             <div className='mainContainer'>
                {watchlist.map((watchlist)=>(
                    <div className='movieBox' key={watchlist.id}>
                        {watchlist.image && (
                            <img className='thumbnail' src={watchlist.image}/>
                        )}
                        <h3>{watchlist.title}</h3>
                        <p>{watchlist.year}</p>
                        <p>{watchlist.watched}</p>
                        <button className='btn-card' type='button' onClick={()=>{changeStatus(watchlist.watched)}} onClick={()=>{updateStatus(user.user, watchlist.title)}}>Movie is {watchlist.watched}. To change this status, click here.</button>
                        <button className='btn-card' type='button' onClick={()=>{removeMovie(user.user, watchlist.title)}}>x</button>
                    </div>
                ))}
            </div>
        </PageContainer>
    )
}