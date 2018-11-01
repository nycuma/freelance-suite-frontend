import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  height: 60px;
  background-color: #0d2f37;
  color: white;
  justify-content: center;
  align-items: center;
`;

class Footer extends React.Component {
  render() {
    return <FooterContainer>This is my footer</FooterContainer>;
  }
}

export default Footer;
