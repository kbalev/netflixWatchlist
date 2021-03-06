import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageContainer} from '../../styledComponents';
import { addMovie } from '../../utils';
import './main.css';

export const Home = (user) => {
        const [dataIMDB, setDataIMDB] = useState([])
        const [error, setError] = useState({ error: false, message: "" });
        useEffect(() => {
            handleFetch();
          }, []);
        

        const handleFetch = async () => {
            try {
                const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ndigoj1k');
                if (response.status !== 200) {
                    throw new error('Oops something went wrong')
                } else if (response.status == 200) {
                    const data = await response.json();
                    setDataIMDB(data.items);
                    console.log(dataIMDB)
                }
            } catch (error) {
                setError({error:true, message: error.message})
            }
        }



    if (error.error) {
        return <h1>An error has occured: {error.error}</h1>
    } else {
        console.log(dataIMDB)
    }


    return(

        <PageContainer>
            <div className='mainContainer'>
               
                {dataIMDB.map((dataIMDB)=>(
                    <div className='movieBox' key={dataIMDB.id}>
                        {dataIMDB.image && (
                            <img className='thumbnail' alt={dataIMDB.crew} src={dataIMDB.image}/>
                        )}
                        <h3>{dataIMDB.title}</h3>
                        <p>{dataIMDB.year}</p>
                        <button className="btn-card" onClick={()=>{addMovie(user.user,dataIMDB.title, dataIMDB.year, dataIMDB.image)}}>Add {dataIMDB.title} to watchlist</button>
                    </div>
                ))}
            </div>
            
        </PageContainer>
    )
}