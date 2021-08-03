import styled from "styled-components";
const StyledContainer = styled.div`
li{
  display: flex;
  justify-content: space-between;
  padding: 3px 5px 2px 5px;
  border-style: none none double none;
}

button{
  border: solid 1px gray;
  width: 70px;
  height: 50px;
  transition: linear 0.3s;
  box-sizing: content-box;
  padding: 0 5px 0 5px;
  flex: 1;
}

button:hover{
  border-radius: 25%;
  border-color: slategray;
  
}
p{
  flex: 1;
  text-decoration: underline;
  align-self: center;
  font-size: 15px;
}

span{
  flex: 6;
  align-self: center;
}`;

export const MovieBox = ({ title, addMovie, moviePoster }) => {
  return (
    <StyledContainer>
      <li>
        <span>{moviePoster}</span>
        <p>{title}</p>
        <button onClick={addMovie}>Add Movie to your watchlist</button>
      </li>
    </StyledContainer>
  );
};
