import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <strong>&copy;2020 俺のポートフォリオ</strong>
            </div>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`
    background: #696969;
    height: 100px;
    color: #ffffff;
    line-height: 100px;
    font-size: 24px;
    text-align: center;
`;
