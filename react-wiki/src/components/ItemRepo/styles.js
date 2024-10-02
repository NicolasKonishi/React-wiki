import styled from "styled-components";

export const ItemContainer = styled.div`
 width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    .button-container {
        display: flex; 
        gap: 20px; 
        margin-top: 20px; 
    }

    a {
        height: 2rem; 
        width: 10%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        padding: 10px 20px; 
        background-color: #007BFF; 
        color: #FFFFFF; 
        text-decoration: none; 
        border-radius: 5px; 
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: #0056b3;
    }

    button {
        height: auto; 
        width: 10%; 
        background-color: #FF0000;
        color: #FFFFFF; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
        display: flex
        align-items: center; 
        justify-content: center; 
        transition: background-color 0.3s; 
    }

    button:hover {
        background-color: #cc0000; 
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`