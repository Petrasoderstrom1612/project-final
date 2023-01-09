import styled from "styled-components/macro";

export const OuterWrapper = styled.section`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export const InnerWrapper = styled.section`
display: flex;
width: 95vw;
margin: 0;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 1px grey;
`
export const StyledCatchPhrase = styled.h1`
font-family: 'Dancing Script', cursive;
color: var(--color-softBlack);
font-size: 4.5em;
font-weight: 300;
padding: .5em 0;
text-align: center;
@media (min-width: 667px) {
  font-size: 7em;
  }
`

export const StyledHeading = styled.h2`
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
font-size: 1.5em;
font-weight: 400;
text-align: center;
@media (min-width: 667px) {
    font-size: 2.5em;
}
`

export const StyledSubHeading = styled.h3`
  font-family: 'Lato', sans-serif;
  color: var(--color-softBlack);
  font-size: .7em;
  letter-spacing: .4em;
  text-transform: uppercase;
  text-align: center;
  @media (min-width: 667px) {
  font-size: .6em;
  }
`

export const StyledButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid var(--color-darkBlack);
  padding: 0 4em;
  cursor: pointer;
  @media (min-width: 1024px) {
    :hover {
      background: var(--color-darkBlack);
      color: #fff;
    }
  }
`
