import React from 'react'
import {HeroContainer, HeroImg, HeroContent, HeroH1, HeroP,Bottom } from './HeroElements'
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../../assets/images/img_2.png'


const Hero = () => {

   return (
      <HeroContainer> 
         
        <img src={image1} alt='ff' style={{ position: 'fixed', height: '650px', width: '520px', left: '850px', bottom: '-26px'}} />
        
         <HeroContent>
            <HeroH1>
            Welcome to the Rick and Morty test task
            </HeroH1>
         </HeroContent>
         
      </HeroContainer>
   )
}

export default Hero
