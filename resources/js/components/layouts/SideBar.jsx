import React from "react";
import styled from "styled-components";
import api from "../../api";

const SideBar = ({setPosts}) => {
    const onChangeSearch = (e) => {
        api.posts.search(e.target.value)
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <StyledAside className="col-md-4">
            <div className="sidebar shadow-sm">
                <input
                    type="text"
                    className="form-control"
                    onChange={onChangeSearch}
                />
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
