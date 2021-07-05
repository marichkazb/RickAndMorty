import styled from 'styled-components'


export const HeroContainer = styled.div ` 

display: flex; 
flex-direction: row;
justify-content: center; 
align-items: center; 
padding: 50px 30px; 
height: 557px; 
display: flex;
flex-direction: row; 
`
export const HeroImg = styled.img ` 
display: flex;
top: 70px; 
left: 120px;
height: 309px; 
width: 30px;

@media screen and (max-width: 960px) { 
  
top: 40px; 
left: 100px;
height: 281px; 
width: 20px;
} 
`

export const HeroContent = styled.div ` 
z-index: 3; 

background-color: transparent;
align-items: flex-start; 
padding: 20px; 
background: transparent;
padding-right: 500px;



@media screen and (max-width: 600px) { 
font-size: 11px;


}

`

export const HeroH1 = styled.h1 ` 
font-size: 30px; 
background-color: transparent;




@media screen and (max-width: 960px) { 
   font-size: 24px;
}
`


export const HeroP = styled.p ` 
margin-top: 0px;

font-size: 36px;

@media screen and (max-width: 960px) { 
   font-size: 26px;
} 
`
export const Bottom= styled.div ` 
padding: 20px;

`