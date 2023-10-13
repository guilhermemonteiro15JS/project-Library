import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer `
    background-color: #F2B705;
    text-align: center;
    font-size: 20px;
    color: black;
    text-shadow: 1px;
    padding: 1rem;
    position: relative;
    margin:5px;
`;

const StyledGit = styled.i `
    color: white;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Book da Wish </p>
            <p>Desenvolvido por: </p>
            <p>Emanuel<a href="https://github.com/EmLeal21"><i className="bi bi-github"></i></a></p>
            <p>Guilherme Barreirinhas<a href="https://github.com/guiscavone"><i className="bi bi-github"></i></a></p>
            <p>Guilherme Monteiro<a href="https://github.com/guilhermemonteiro15JS"><i className="bi bi-github"></i></a></p>
            <p>Ricardo<a href="https://github.com/Ricardoszs"><i className="bi bi-github"></i></a></p>
        </StyledFooter>
    );
};

export default Footer; 