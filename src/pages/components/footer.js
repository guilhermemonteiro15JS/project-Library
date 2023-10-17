import React from "react";
import { StyledFooter, StyledGit, GitHubLink } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Book da Wish </p>
      <p>Desenvolvido por: </p>
      <StyledGit>
        <p>
          Emanuel
          <GitHubLink href="https://github.com/EmLeal21">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
        <p>
          Guilherme Barreirinhas
          <GitHubLink href="https://github.com/guiscavone">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
        <p>
          Guilherme Monteiro
          <GitHubLink href="https://github.com/guilhergemonteiro15JS">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
        <p>
          Ricardo
          <GitHubLink href="https://github.com/Ricardoszs">
            <i className="bi bi-github"></i>
          </GitHubLink>
        </p>
      </StyledGit>
    </StyledFooter>
  );
};

export default Footer;
