import { forwardRef } from "react";

import { StyledWrapper, StyledContainer } from "./layout.styles";

const Layout = ({ children }, ref) => (
  <StyledWrapper>
    <StyledContainer ref={ref}>{children}</StyledContainer>
  </StyledWrapper>
);

export default forwardRef(Layout);
