import styled from "styled-components";


export const Container = styled.div`
  .HeaderArea {
    margin: 15px auto;
    max-width: 1340px;
    display: flex;
    justify-content: space-between;
  }

  img {
    margin: 10px;
    width: 30px;
    height: 30px;
  }
`;

export const NavMenu = styled.div`
  display: flex;

  nav {
    display: flex;
    align-items: center;

    a {
      font-family: Roboto, sans-serif;
      text-decoration: none;
      color: #f8f8f8;
      margin: 0 10px;
    }

    .Prf{
      height: 10px;
      border-radius: 60px;
      border: 1px solid red;
      background: red;
    }
  }
`;