import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div ` 
background-color: #0d0909;
color: #fff;
font-size: 18px;
margin-bottom: 0;
bottom: 0;
right: 0;
left: 0;
  z-index: 100;
  position: fixed;
`;

export const FooterWrap = styled.div ` 
padding: 16px 24px;
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
max-width: 1300px; 
margin: 0 auto;
`

export const SocialMedia = styled.section ` 
max-width: 1300px; 
width: 100%; 
align-items: center;
`;

export const SocialMediaWrap = styled.div ` 
display: flex; 
justify-content: space-between; 
align-items: center; 
`

export const SocialLogo = styled(Link) ` 
color: #fff; 
justify-self: start; 
cursor: pointer; 
text-decoration: none; 
font-size: 16px; 
display: flex; 
align-items: center; 
`;

export const SocialIcons = styled.div ` 
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
`;

export const SocialIconLink = styled.a ` 
  font-size: 24px;
  color: #fff;
`;

export const Smalltext = styled.div ` 
font-size: 14px;
`
