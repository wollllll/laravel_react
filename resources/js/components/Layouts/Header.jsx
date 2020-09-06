import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <Link to="/" className="to-top">俺のポートフォリオ</Link>
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    background: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 24px;

    .to-top {
      color: #696969;
      font-weight: bold;

      &:hover {
        opacity: .8;
        text-decoration: none;
      }
    }
`;
