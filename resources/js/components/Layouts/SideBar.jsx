import React from "react";
import styled from "styled-components";

const SideBar = () => {
    return (
        <StyledAside className="col-md-4">
            <div className="shadow-sm">
                a
            </div>
        </StyledAside>
    )
}

export default SideBar;

const StyledAside = styled.aside`
    div {
        height: 100vh;
        background: #ffffff;
        margin: 0 15px;
        padding: 0 15px;
    }
`;
