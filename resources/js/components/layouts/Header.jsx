import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import api from "../../api";

const Header = ({setPosts}) => {
    const onChangeSearch = (e) => {
        api.posts.getAll(e.target.value)
            .then(response => {
                setPosts(response.data.posts.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <StyledHeader className="shadow-sm">
            <div className="container-fluid d-flex">
                <Link
                    to="/"
                    className="to-top"
                >俺のポートフォリオ</Link>
                <input
                    type="text"
                    className="search-input form-control"
                    onChange={onChangeSearch}
                    placeholder="タイトルで検索"
                />
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

    .container-fluid {
        width: 90%;

        .to-top {
            color: #696969;
            font-weight: bold;

            &:hover {
                opacity: .8;
                text-decoration: none;
            }
        }

        .search-input {
            width: 300px;
            margin: auto 0 auto auto;
            font-size: 16px;
        }
    }
`;
