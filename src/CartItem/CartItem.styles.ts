import styled from 'styled-components';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');
* {
    font-family: 'Poppins', sans-serif;
}
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    
  }
  button{
    background-color: #25c77c;
  }
  Button:hover {
    background-color: #21b571;
  }

  img {
    max-width: 250px;
    object-fit: cover;
    margin: 40px;
  }
`;
