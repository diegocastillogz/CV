import styled from "styled-components";

const Layout = styled.div`
  background: ${({ theme }) => theme.bodyBackground};
  max-width: ${({ theme }) => `${theme.maxWidthScreen}`};
  margin: 0 auto;
`;

export default Layout;
