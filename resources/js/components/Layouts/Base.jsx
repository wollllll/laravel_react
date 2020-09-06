import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import "normalize.css";

const Base = ({children}) => {
    return (
        <StyledBase>
            <Header/>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer/>
        </StyledBase>
    );
}

export default Base;

const StyledBase = styled.div`
  background: #fafafa;

  main {
    height: 90vh;
  }
`;
