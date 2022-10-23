
import React from 'react' 
import styled from "styled-components";
import ActivateHeader from './ActivateHeader';
;

const Activate = () => {

  return (

    <> 
  
  <ActivateHeader />

    <div>
    <div className='flex flex-row gap-2 justify-end'>
    <RectangleRootRoot1>
      <Image10 src={`https://file.rendit.io/n/WOYHGlmF8wVVWkrvRppv.svg`} />
      <Text10  placeholder={`Search`} type="text" />
    </RectangleRootRoot1>

    <div className='pr-6'>
    <RectangleRoot>
      <FlexRow>
        
        <Text1>Download </Text1>
      </FlexRow>
    </RectangleRoot>
    </div>
    </div> 
               <div style={{overflowX: "auto"}} className='bg-white mx-6 my-6 '> 
     <table className='Yourdoc' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"5%"}}><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></th>
         <th style={{width:"8%"}}>Acronym</th>
         <th style={{width:"33%"}}>University</th>
         <th style={{width:"18%"}}><span>Reg No</span></th>      
         <th style={{width:"15%"}}>Email</th>
         <th style={{width:"15%"}}>Phone Number</th>
         <th style={{width:"10%"}}>Contract</th>
     </tr>    

     
      
     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years 10months</Text3></td>
        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years</Text3></td>
        
     </tr>


     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years</Text3></td>
        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years</Text3></td>
        
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years</Text3></td>
        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2'><Text3>FUTA</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>Uni/1992/FUTA/112</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         <td><Text3>3 years</Text3></td>
     </tr>


     
     
 </table>

  
 
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







const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;

  @media ${devices.tablet} { 
    font-size: 17px;
    padding-left: 3px;
  }
 
`;





const RectangleRoot = styled.div`
  border-style: solid;
  border-color: #2d0353;
  width: 163px;
  mix-blend-mode: normal;
  background-color: #f0f0f0;
  padding-right: 20px;
  border-radius: 6px;
  padding: 11.5px ; 
  border-width: 0.5px;
 margin-top: 2px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
 
`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
 
`;





  
const RectangleRootRoot1 = styled.div`
max-width: 217px;
gap: 14px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
background-color: #fafafa;
border-radius: 6px;
padding: 4px 4px;
margin-bottom: 11px;
`;
const Image10 = styled.img`
width: 15px;
height: 15px;
`;
const Text10 = styled.input`
max-width: 266px;
height: 44px;
display: inline-block;
padding: 0px;
color: #b3b1b1;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
outline-width: 0px;
border-width: 0px;
background: none;
:: placeholder {
  color: #b3b1b1;
}

@media ${devices.tablet} {
  width: 120px;    
} 

@media ${devices.mobileL} {
  width: 80px;    
} 

`;


export default Activate