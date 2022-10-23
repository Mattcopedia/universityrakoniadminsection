import React,{useRef} from 'react'
import profilephoto from "../assets/img/profileUpload.PNG";
import styled from "styled-components"; 
import Sidebar from 'components/Sidebar';


const DatabaseEditAccount = () => {

    const focusDiv = useRef();

    if(focusDiv.current) {
        focusDiv.current.focus(); 
      }

   

  return (
    <>
    <Sidebar />

    <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Edit <br className="responsivemodal"></br>Account</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/S1qCIBcTwFRUpjxLsSHi.png`} /> 
       </div>  
     
    </div> 

    <div>
       <div>
        
        <div class="max-w-7xl  grid grid-cols-12 ml-2 mb-3 md:ml-7 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-2 bg-gray-100">

                  
            
                   
                     
                   <div className='mx-auto mt-1 lg:mt-3 '>
                   
                     <label className='cursor-pointer' htmlFor="uploadpic">
                     <Image1yt src={profilephoto} />
                       <input className='file' id="uploadpic" type="file"/>
                       </label>    
                   
 
               </div>
             
              

              </div>


              <div class="col-span-12 md:col-span-12 lg:col-span-10 mt-5 md:mt-0 ">
                      
              <RootRootaw>
             
             <div className=' md:mx-auto bg-gray-100 pl-5 lg:pl-0 mb-5  mx-auto lg:mx-1 pt-8 lg:pt-4'>
             <FlexColumnaw>
                 
                            
                 <FlexColumn1aw>
                 
 
                 <form>           
                <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> University name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">University acronym</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="admin"> User name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="admin"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="newpassword">Password</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="password" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> Email address</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="email" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="phonenumber">Phone number</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="phonenumber"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="universitywebsite"> University website</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="universitywebsite"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                
                  <div className="flex-col">
                 <Text4aw htmlFor="universitywebsite"> University Registration number</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="universitynumber"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                  </div>

              

 
                <div class='justify flex flex-col lg:flex-row gap-4'> 

                <RectangleRoot1>
                <p  className='text-black pl-2 text-center lg:pl-1 cursor-pointer'>Cancel</p>   
                </RectangleRoot1>  

                 <RectangleRoot>
                <p  className='text-white  pl-2 text-center lg:pl-1 cursor-pointer'>Update</p>   
                </RectangleRoot>  
                </div>
               
                 </form> 
                
                 </FlexColumn1aw> 
                 <div>
            
              </div>
             </FlexColumnaw>
 
             </div>  

            </RootRootaw>  
               

              
                </div>
              
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
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;




const RectangleRoot = styled.div`
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
width: 200px;
height: 50px;
background-color: #2d0353;
padding-top: 12px;
padding-bottom: 12px;
margin-top:10px;

@media ${devices.mobileL} { 
  width: 200px;
  height: 50px; 
 padding-right: 10px; 
 margin-left:10px; 
 padding-bottom: 2px;
} 

`;

const RectangleRoot1 = styled.div`
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
width: 200px;
height: 50px;
background-color: #E9F4EE;
padding-top: 12px;
padding-bottom: 12px;
margin-top:10px;

@media ${devices.mobileL} { 
  width: 200px;
  height: 50px; 
 padding-right: 10px; 
 margin-left:10px; 
 padding-bottom: 2px;
} 

`;

const RootRootaw = styled.div`



display: flex;
flex-direction: column;


@media ${devices.tablet} { 
  margin-top:5px;
  margin-right:2px; 
  margin-left:8px;
 }  

@media ${devices.mobileL} { 
  margin-top:5px;
  margin:auto;
  overflow: hidden;
  margin-left:12px;
 }  

`;  

const Text4aw = styled.label`
font-size: 16px;
font-family: Roboto;
line-height: 24px;
color: #505050;
align-self: flex-start;



`;







const FlexColumnaw = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media ${devices.tablet} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;


}    


@media ${devices.mobileL} { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-left:8px;  
 
}  

`;
const FlexColumn1aw = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0px 0px 5px 0px;

@media ${devices.tablet} { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

} 

@media ${devices.mobileL} { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  

} 
`; 
const FlexColumn2aw = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
justify-content: center; 
align-items: center;
margin: ${(props) => props.margin};
`;




const Image1yt = styled.img`
  width: 123px;
  height: 124px;
  margin: auto;
   top: 33px;
`;





export default DatabaseEditAccount