import React from "react";
import styled from "styled-components";

const SideBar = () => {
    return (
        <StyledAside className="col-md-4">
            <div className="sidebar shadow-sm">
                a
            </div>
        </StyledAside>
    )
}

export default SideBar;

const StyledAside = styled.aside`
    .sidebar {
        background: #ffffff;
        margin: 0 15px;
        padding: 0 15px;
    }
`;
