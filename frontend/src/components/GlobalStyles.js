import styled from "styled-components/macro";

export const OuterWrapper = styled.section`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export const InnerWrapper = styled.section`
display: flex;
width: 90vw;
margin: 0 auto;
flex-direction: column;
justify-content: center;
row-gap: 30px;
align-items: center;
/* margin-top: 1%;
margin-bottom: 10%; */
`

export const StyledCatchPhrase = styled.h1`
font-family: 'Oooh Baby', cursive;
color: var(--color-softBlack);
font-size: 6em;
font-weight: 400;
line-height: 2em;
margin: 0;
padding: 0;
`

export const StyledHeading = styled.h2`
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
line-height: 4em;
font-size: 3.5em;
font-weight: 400;
/* @media (min-width: 667px) {
    font-size: 1.9em;
} */
`

export const StyledSubHeading = styled.h3`
  font-family: 'Lato', sans-serif;
  color: var(--color-softBlack);
  font-size: .8em;
  line-height: 1em;
  letter-spacing: .6em;
  text-transform: uppercase;
  /* @media (min-width: 667px) and (max-width: 1024px) {
  font-size: 1.8em;
  }
  @media (min-width: 1024px) {
  font-size: 1.6em;
  } */
`

export const StyledButton = styled.button `
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid var(--color-darkBlack);
  padding: 0 4em;
  cursor: pointer;
  color: black;
  margin-top: 1em;
  @media (min-width: 1024px) {
    :hover {
      background: var(--color-darkBlack);
      color: #fff;
    }
  }
`
