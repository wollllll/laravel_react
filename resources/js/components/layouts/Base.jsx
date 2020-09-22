import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import "normalize.css";
import SideBar from "./SideBar";

const Base = ({children, setPosts}) => {
    return (
        <StyledBase>
            <Header setPosts={setPosts}/>
            <div className="container-fluid my-5">
                <div className="row">
                    <main className="col-md-8">
                        <div className="main">
                            {children}
                        </div>
                    </main>
                    <SideBar/>
                </div>
            </div>
            <Footer/>
        </StyledBase>
    );
}

export default Base;

const StyledBase = styled.div`
  background: #fafafa;
  color: #696969;
  word-break: break-all;

  .container-fluid {
      width: 90%;

      .main {
          margin: 0 15px;
      }
  }
`;
