import styled from "styled-components";

const Layout = styled.main`
  background: ${({ theme }) => theme.colors.bodyBackground};
  max-width: ${({ theme }) => `${theme.maxWidthScreen}`};
  margin: 0 auto;
`;

export default Layout;
