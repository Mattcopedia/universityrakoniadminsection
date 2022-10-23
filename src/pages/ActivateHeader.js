import Sidebar from 'components/Sidebar'
import styled from "styled-components";  


const ActivateHeader = () => {
  


  return (
    <>
    <div> 
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Activate/Deactivate <br className="responsivemodal"></br> University </Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/u2hBuyadp2cMTd8Z5mhD.svg`} /> 
       </div>  
     
    </div> 
 
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


const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  padding-left: 27px;
  font-size:27px;
} 

@media ${devices.tablet} { 
    padding-left: 27px;
    font-size:27px;
  } 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;


export default ActivateHeader