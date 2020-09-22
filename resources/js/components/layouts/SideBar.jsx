import React from "react";
import styled from "styled-components";

const SideBar = ({setPosts}) => {
    return (
        <StyledAside className="col-md-4">
            <div className="sidebar shadow-sm">

            </div>
        </StyledAside>
    );
}

export default SideBar;

const StyledAside = styled.aside`
    .sidebar {
        background: #ffffff;
        margin: 0 15px;
        padding: 15px;
    }
`;
