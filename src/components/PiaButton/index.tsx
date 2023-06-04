import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  border: #eb9b00 2px solid;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: #b87900 2px solid;
  }
`

const PiaButton = () => {
  return(
    <Button>
      Clique aqui
    </Button>
  )
}

export default PiaButton;