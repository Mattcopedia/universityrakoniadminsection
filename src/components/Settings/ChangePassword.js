
import React, {useState} from 'react'
import styled from "styled-components"; 
import SettingsHeader from './SettingsHeader';
import SettingsInfo from './SettingsInfo';
import {Link} from "react-router-dom"


const SettingsChangePassword = () => {
  
  const [passwordType, setPasswordType] = useState("password");
  const [NewpasswordType, setNewPasswordType] = useState("password");
  const [ConfirmNewpasswordType, setConfirmNewPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [NewpasswordInput, setNewPasswordInput] = useState("");
    const [ConfirmNewpasswordInput, setConfirmNewPasswordInput] = useState("");

    const handlePasswordChange =(event)=>{
      setPasswordInput(event.target.value);
  }

  const NewhandlePasswordChange =(event) =>{
    setNewPasswordInput(event.target.value);
}

const ConfirmNewhandlePasswordChange =(event)=>{
  setConfirmNewPasswordInput(event.target.value);
}

  const togglePassword = () => {
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const NewtogglePassword = () => {
    if(NewpasswordType==="password")
    {
     setNewPasswordType("text")
     return;
    }
    setPasswordType("password")
  }


  const ConfirmNewtogglePassword = () => {
    if(ConfirmNewpasswordType==="password")
    {
     setConfirmNewPasswordType("text")
     return;
    }
    setPasswordType("password")
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
                                <RoyalPurpleRectangle1 />
                             
                                </div>
                         
                            </Link>

                            
                  
                       </div>
                     

                    
                    <div>
                    <FlexColumn>
                        
                          
                       
                  
                     
                                

                        <FlexColumn1>
                        

                        <div className='bg-white px-7 py-5'>           
                        <div className='flex justify-start'>
                    <EditProfileRoot>Change Password</EditProfileRoot>
                    </div> 
                      
                


                        <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                        <Text4 htmlFor="phonenumber"> Old Password</Text4> 
                        <div className='flex flex-row border-gray-500 border-solid border rounded-md'>      
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} style={{height:"44px"}} className='formshow' id="password"/>  
                        <div className='pt-2 pr-3' onClick={togglePassword}>
                         { passwordType==="password" ?<i class="fa-regular fa-eye"></i>: <i class="fa-regular fa-eye-slash"></i> }
                        </div>
                        </div> 

                        </FlexColumn2> 
                

                        <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                        <Text4 htmlFor="address"> New Password</Text4>        
                        <div className='flex flex-row border-gray-500 border-solid border rounded-md'>      
                        <input type={NewpasswordType} onChange={NewhandlePasswordChange} value={NewpasswordInput} style={{height:"44px"}} className='formshow' id="password"/>  
                        <div className='pt-2 pr-3' onClick={NewtogglePassword}>
                         { passwordType==="password" ?<i class="fa-regular fa-eye"></i>: <i class="fa-regular fa-eye-slash"></i> }
                        </div>
                        </div>  
                        </FlexColumn2>  

                        <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                            <Text4 htmlFor="address"> Re-enter Password</Text4>        
                            <div className='flex flex-row border-gray-500 border-solid border rounded-md'>      
                        <input type={ConfirmNewpasswordType} onChange={ConfirmNewhandlePasswordChange} value={ConfirmNewpasswordInput} style={{height:"44px"}} className='formshow' id="password"/>  
                        <div className='pt-2 pr-3' onClick={ConfirmNewtogglePassword}>
                         { passwordType==="password" ?<i class="fa-regular fa-eye"></i>: <i class="fa-regular fa-eye-slash"></i> }
                        </div>
                        </div> 
                            </FlexColumn2> 

                         

                        
                        <button className='purplebtn' type='submit'>Change Password</button> 
                        </div> 
                    
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



  

const FlexColumn2 = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
justify-content: center;
align-items: center;
margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
font-size: 16px;
font-family: Roboto;
line-height: 24px;
color: #505050;
align-self: flex-start;
`;
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
width: 65px;
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



export default SettingsChangePassword