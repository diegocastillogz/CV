import styled from "styled-components";

const Interests = ({ interests }) => {
  return (
    <StyledInterestsSection>
      <h2>Interests</h2>
      <StyledInterestsList>
        {interests.map((interest, index) => (
          <li key={index}>
            <p>{interest}</p>
          </li>
        ))}
      </StyledInterestsList>
    </StyledInterestsSection>
  );
};

const StyledInterestsSection = styled.section`
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.SHorizontalPadding} 0`};
  grid-area: interests;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDHorizontalPadding} 0`};

    width: 100%;
  }
`;

const StyledInterestsList = styled.ul`
  padding: ${({ theme }) => `0 ${theme.paddings.SHorizontalPadding}`};

  li {
    margin-bottom: 15px;
    p {
      text-transform: capitalize;
    }
  }
`;

export default Interests;
