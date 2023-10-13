import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer `
    background-color: #F2B705;
    text-align: center;
    font-size: 15px;
    color: white;
    text-shadow: 20px;
    padding: 1rem;
    position: relative;
    margin:5px;
`;

const StyledGit = styled.div `
    color: white; /* Altere a cor para branca */
    justify-content: space-between;
    border: 1px;
`;

const GitHubLink = styled.a `
    color: white; /* Garante que a cor seja branca */
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Book da Wish </p>
            <p>Desenvolvido por: </p>
            <StyledGit>
                <p>Emanuel<GitHubLink href="https://github.com/EmLeal21"><i className="bi bi-github"></i></GitHubLink></p>
                <p>Guilherme Barreirinhas<GitHubLink href="https://github.com/guiscavone"><i className="bi bi-github"></i></GitHubLink></p>
                <p>Guilherme Monteiro<GitHubLink href="https://github.com/guilhergemonteiro15JS"><i className="bi bi-github"></i></GitHubLink></p>
                <p>Ricardo<GitHubLink href="https://github.com/Ricardoszs"><i className="bi bi-github"></i></GitHubLink></p>
            </StyledGit>
        </StyledFooter>
    );
};

export default Footer; 