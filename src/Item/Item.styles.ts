import styled from 'styled-components';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap');
* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
  .product-card{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid lightgray;
    border-radius: 20px;
    height: 100%;
    padding: 1em;
    max-height: 350px;

  }

  .product-image, .product-details{
    display: flex;
    flex-direction: column;
    margin: 2%;
  }

  h3 {
    text-align: justify;
    margin-top: 10%;
    font-size: medium;
  }

  p {
    text-align: justify;
    margin-top: 10%;
    font-size: small;
    overflow: hidden;
  }

  .price{
    margin-top: 10%;
    text-align: right;
    font-size: 1.5em;
  }
  
  Button {
    margin-top: 10%;
    background-color: #25c77c;
    padding: 10px 20px;
  }

  Button:hover {
    background-color: #21b571;
  }

  img {
    max-height: 250px;
    max-width: 200px;
    object-fit: cover;
  }
`;
