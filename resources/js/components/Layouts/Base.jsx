import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import "normalize.css";
import SideBar from "./SideBar";

const Base = ({children}) => {
    return (
        <StyledBase>
            <Header/>
            <div className="container vh-100 my-5">
                <div className="row">
                    <main className="main col-md-8">
                        <div className="shadow-sm">
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

  .main {
      div {
          height: 100vh;
          background: #ffffff;
          padding: 0 15px;
      }
  }
`;
