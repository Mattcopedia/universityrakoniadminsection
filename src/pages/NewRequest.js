
import React from 'react' 
import styled from "styled-components";
import NewRequestHeader from "./NewRequestHeader"

const NewRequest = () => {

  return (

    <> 
  
  <NewRequestHeader />

    <div>
    
               <div style={{overflowX: "auto"}} className='bg-white mx-6 my-6 '> 
     <table className='Yourdoc' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
  
         <th style={{width:"20%", paddingLeft: "10px"}}>Date</th>
         <th style={{width:"35%"}}>University</th>
         <th style={{width:"22.5%"}}>Email</th>
         <th style={{width:"22.5%"}}>Phone number</th>
      
     </tr>    

     
      
     <tr style={{height:"70px"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
         
        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>    
     </tr>


     <tr style={{height:"70px"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>

        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
        
     </tr>

     <tr  style={{height:"70px"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
    
        
     </tr>

     <tr style={{height:"70px" , backgroundColor: "#e5e5e5"}}> 
  
         <td style={{paddingLeft: "10px"}} className='pr-2'><Text3>20/10/2021</Text3></td>
         <td><Text3>Federal University of Technology Akure</Text3></td>
         <td><Text3>info@futa.edu.ng</Text3></td>
         <td><Text3>+2348052613220</Text3></td>
      
        
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





export default NewRequest