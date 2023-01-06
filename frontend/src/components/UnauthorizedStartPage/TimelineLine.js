import React from "react";
import styled from "styled-components/macro";

const TimelineLine = () => {
  return (
    <StyledLine><StyledDot></StyledDot></StyledLine>
  )
}

export default TimelineLine;

const StyledLine = styled.div`
  border-right: rgb(139, 139, 139) 1px solid;
`
const StyledDot = styled.div`
height: 10px;
  width: 10px;
  border-radius: 100%;
  background: rgb(139, 139, 139);
  position: relative;
  left: 6px;
  `
