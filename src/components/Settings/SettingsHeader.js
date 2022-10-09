

import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const SettingsHeader = () => {
 
    const focusDiv = useRef();


    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>
    


        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
       <Paragraph> Settings</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <ImageRoot>  
       </ImageRoot>   
     
    </div> 
  
 

       <div> 
       
       </div>
        </> 
           
    )
 
}

const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };
  export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

  
  
const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.div`
width: 89px;
height: 89px;
`;

const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;






export default SettingsHeader; 

