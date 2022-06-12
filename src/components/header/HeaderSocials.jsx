import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://gitlab.com" target="_blank">
        <AiFillGitlab />
      </a>
    </div>
  );
};

export default HeaderSocials;
