import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Item = (props) => {
    return (
        <StyledItem className="row item shadow-sm">
            <div className="col-md-5 image-box">
                画像を表示
            </div>
            <div className="col-md-7 detail-box">
                <div className="header">
                    <p>{props.post.title}</p>
                </div>
                <div className="body">
                    <p>{props.post.detail}</p>
                </div>
                <div className="footer">
                    <p>{props.post.created_at}</p>
                </div>
            </div>
            <Link to={`/${props.post.slug}`} className="item-link">&nbsp;</Link>
        </StyledItem>
    );
};

export default Item;

const StyledItem = styled.div`
  position: relative;
  height: 200px;
  background: #fff;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 30px;
  }

  &:hover {
    opacity: .8;
  }

  .item-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:hover {
      text-decoration: none;
    }
  }

  .image-box {
    background: red;
  }

  .detail-box {
    padding: 10px;

    p {
      margin: 0;
      font-size: 18px;
    }

    .header {
      height: 20%;

      p {
        font-size: 22px;
      }
    }

    .body {
      height: 60%;
    }

    .footer {
      position: relative;
      height: 20%;

      p {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;
