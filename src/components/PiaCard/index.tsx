import React, { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps {
  children: ReactNode,
}

const Card = styled.div`
  padding: 48px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

const PiaCard = ({
  children = 'Loren ipsum...'
}: CardProps) => {
  return(
    <Card>
      { children }
    </Card>
  )
}

export default PiaCard;