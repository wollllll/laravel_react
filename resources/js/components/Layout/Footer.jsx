import React from "react";
import styled from "styled-components";

const Footer = () => {
    const scrollToTop = () => {
        scrollTo(0, 0);
    }

    return (
        <StyledFooter>
            <div className="container-fluid">
                <strong>&copy;2020 俺のポートフォリオ</strong>
                <a href="#" className="scrollToTop shadow-lg" onClick={scrollToTop}>
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`
    position: relative;
    background: #696969;
    height: 100px;
    color: #ffffff;
    line-height: 100px;
    font-size: 24px;
    text-align: center;

    .container-fluid {
        width: 90%;

        .scrollToTop {
           position: absolute;
           top: -30px;
           right: 30px;
           background: #DDDDDD;
           border-radius: 50%;
           height: 60px;
           width: 60px;
           color: #696969;
           line-height: 60px;

           &:hover {
              opacity: .8;
              text-decoration: none;
           }
        }
    }
`;
