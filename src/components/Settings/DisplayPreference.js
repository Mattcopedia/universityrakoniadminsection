

import React,{ useState } from 'react'
import styled from "styled-components"; 
import SettingsHeader from './SettingsHeader';
import SettingsInfo from './SettingsInfo';
import {Link} from "react-router-dom"


const DisplayPreference = () => {
    const [primaryColor, setPrimaryColor] = useState("#2D0353");
    const [SecondaryColor, setSecondaryColor] = useState("#DF8A09");
    const [date, setDate] = useState(new Date().toISOString().slice(0,10));

    const handleColor = (event) => {
        setPrimaryColor(event.target.value);
      };

      const handleChangeDate = (event) => {
        setDate(event.target.value);
      };
    

    const handleSecondaryColor = (event) => {
        setSecondaryColor(event.target.value);
      };

const style = {
 borderRadius: "6px",
 padding: "9.5px 11.5px 8.5px 16.5px",
 borderWidth: "0.5px",
 width:"100px", 
 borderStyle: "solid",
 borderColor: "#787878",
 backgroundColor: primaryColor,
 color: "white"

}

const smallstyle = {
    borderRadius: "6px",
    padding: "9.5px 11.5px 8.5px 16.5px",
    borderWidth: "0.5px",
    width:"34px", 
    height:"38px",
    borderStyle: "solid",
    borderColor: "#787878",
    backgroundColor: primaryColor,
    
    
   }

   const Secondarystyle = {
    borderRadius: "6px",
    padding: "9.5px 11.5px 8.5px 16.5px",
    borderWidth: "0.5px",
    width:"100px", 
    borderStyle: "solid",
    borderColor: "#787878",
    backgroundColor: SecondaryColor,
    color: "white"
   
   }
   
   const Secondarysmallstyle = {
       borderRadius: "6px",
       padding: "9.5px 11.5px 8.5px 16.5px",
       borderWidth: "0.5px",
       width:"34px", 
       height:"38px",
       borderStyle: "solid",
       borderColor: "#787878",
       backgroundColor: SecondaryColor,
       
       
      }

  return (
    <>
    
    <SettingsHeader />
  
    <div>
        
        <div class="max-w-7xl  grid grid-cols-12 ml-2 mb-3 md:ml-7 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-5">
                <SettingsInfo />
              </div>


              <div class="col-span-12 md:col-span-12 lg:col-span-7 mt-5 md:mt-0 ">
                      
               
                            <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 

                <div className="container ">
                
                <div className="flex flex-wrap ">       
                    <div  className="flex items-center flex-wrap w-full ">
                    
                    <RootRoot>
                     
                    <div  className='flex flex-row flex-wrap gap-4 md:gap-4 mx-auto mb-4'>
                            
                            <Link to="/settings-profile">
                            <div className='flex flex-col'>
                                <Text1yw>Profile</Text1yw>
                             
                            </div>
                            </Link>

                           

                            <Link to="/display-preference"> 
                                
                            <div className='flex flex-col'>
                                <Text1yw>Display Preference</Text1yw>
                                <RoyalPurpleRectangle1 />
                                </div>
                         
                            </Link>

                            <Link to="/settings-contact">
                            <div className='flex flex-col'>
                                <Text1yw>Contact</Text1yw>
                               
                                </div>
                        
                            </Link>

                            <Link to="/settings-social-media">
                            
                            <div className='flex flex-col'>
                                <Text1yw>Social Media</Text1yw>
                              
                                
                                </div>
                       
                            </Link>

                            <Link to="/settings-change-password">
                             
                            <div className='flex flex-col'>
                                <Text1yw>Password</Text1yw>
                             
                             
                                </div>
                         
                            </Link>

                            
                  
                       </div>
                     

                    
                    <div>
                    <FlexColumn>
                        
                          
                       
                  
                     
                                

                        <FlexColumn1>
                        

                        <form className='bg-white px-7 py-5'>           
                        <div className='flex justify-start'>
                    <EditProfileRoot>Display Preference</EditProfileRoot>
                    </div> 
                      
                 
                    <div  className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px"}}>
       <th style={{width:"43%"}}></th> 
       <th style={{width:"15%"}}></th>
       <th style={{width:"33%"}}></th>  
       
   </tr>    

   <tr style={{height:"70px"}}> 
       <td>   <label className='pt-2' htmlFor='hour'>Primary Color</label></td>
       <td style={{ paddingRight:"10px"}}>
        <div className='flex p-0.5 flex-row gap-1 border-gray-500 border-solid border rounded-md'>
                        <div style={smallstyle}> </div> 
                        <select  style={{width: "20px", border: "none", outline:"none"}} value={primaryColor} onChange={handleColor}> 
                        <option  value={"#2D0353"}>#2D0353</option>      
                        <option value={"#DF8A09"}>#DF8A09</option>
                    </select>
                        </div>
                </td>
       <td> <div style={style}> {primaryColor} </div> </td>

   </tr>


   <tr style={{height:"70px"}}> 
       <td>   <label className='pt-2' htmlFor='hour'>Secondary Color</label></td>
       <td style={{ paddingRight:"10px"}} >
       <div className='flex p-0.5 flex-row gap-1 border-gray-500 border-solid border rounded-md'>
                        <div style={Secondarysmallstyle}> </div> 
                        <select  style={{width: "20px", border: "none", outline:"none"}} value={SecondaryColor} onChange={handleSecondaryColor}> 
                        <option  value={"#2D0353"}>#2D0353</option>      
                        <option value={"#DF8A09"}>#DF8A09</option>
                    </select>

                   
                        </div>
                </td>
       <td>  <div style={Secondarystyle}> {SecondaryColor} </div>  </td>

   </tr>

   <tr style={{height:"70px"}}>
    <td> <label className='pt-2' for="countdown">Set Date</label></td>
    <td colspan="2">  <WhiteFlexRow style={{height:"40px"}} onChange={handleChangeDate} value={date} type="date" id="Countdown" name="coundown" /></td>
    <td> </td>
   </tr>

      </table>
    

</div>
  

                        
                        <button className='purplebtn ml-4 md:ml-0' type='submit'>Save Change</button> 
                        </form> 
                    
                        </FlexColumn1> 
                        <div>
                
                    </div>
                    </FlexColumn>

                    </div>  
                    
                </RootRoot>  


                    
                    </div> 
                    
                    </div>
                </div>

                </section>

              
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





const RootRoot = styled.div`

  
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin: auto;
background-color: #FAFAFA;
padding-bottom:70px;
padding-top: 20px;
margin-bottom: 150px; 

@media ${devices.mobileL} { 
 
  margin: 0px;
  overflow: hidden; 
 }  

`;








const FlexColumn = styled.div`
min-height: 600px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10px;
padding-right:60px; 
padding-left:60px; 


@media ${devices.tablet} {
  margin-left: 90px;
  height: 319px;
  padding-left:27px;  
  padding-right:40px; 
  margin-left:10px
}    


@media ${devices.mobileL} { 
  
  margin-left: 0px;
  height: 319px;
  padding-left:0px;  
  padding-right:0px; 
 
}  

`;
const FlexColumn1 = styled.div`
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0px 0px 5px 0px;
background-color:white;

@media ${devices.mobileL} { 
  margin: 0px 0px 0px 0px;
  margin-right: 145px; 

} 
`; 






const Text1yw = styled.div`
font-size: 14px;
font-family: Roboto;
line-height: 21px;
color: #2d0353;

`;

const RoyalPurpleRectangle1 = styled.div`
width: 120px;
height: 3px;
background-color: #2d0353;
`;

const EditProfileRoot = styled.div`
color: #2d0353;
font-size: 24px;
font-family: Product Sans Medium;
line-height: 23.28px;
display:flex;
justify-content: center; 
margin-bottom: 10px;
`;


const WhiteFlexRow = styled.input`
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 9.5px 15.5px 8.5px 16.5px;
  border-width: 0.5px;

`;

export default DisplayPreference