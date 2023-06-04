//src/components/AbTag/index.tsx
import React from "react"
import styled from "styled-components";

export interface PiaTagProps {
  text: string;
}

const Tag = styled.div`
  padding: 16px 24px;
  color: #FFFFFF;
  background: #EB9B00;
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  font-family: sans-serif;
`

const PiaTag = ({ 
  text,
}: PiaTagProps) => {
  return (
    <Tag>
      { text }
    </Tag>
  )
}

export default PiaTag;