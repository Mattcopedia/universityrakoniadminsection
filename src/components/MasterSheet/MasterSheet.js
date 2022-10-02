import React from 'react'
import styled from "styled-components";  
import Sidebar from 'components/Sidebar';




const MasterSheet = () => {
  return (

    <div>
        <Sidebar />
       
        <div className="grid grid-cols-5 py-4 mx-4 mb-7 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Master <br className="responsivemodal"></br> Sheet</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/ea9U7J8BKVC2vkbEYTeO.svg`} /> 
       </div>  
     
    </div>

         <div className='flex flex-start pl-4'>     
    <EditProfileRoot>Enter Course information</EditProfileRoot>
       </div>
            
            <div className='bg-gray-100 mx-2 py-3 mb-3'>
            <div className="flex justify-evenly lg:flex-row gap-2 md:flex-col flex-col items-center mx-4  my-3">
            <div className="  flex flex-row gap-2  ">
            <input type="radio" value="Result" name="Status" />
            <Text1>Result</Text1>
                </div>
            <div className="  flex flex-row gap-2 pl-9 ">
            <input type="radio" value="Amendment" name="Status" />
            <Text1>Amendment</Text1>
                </div>
            <div className="  flex flex-row gap-2 pl-11  ">
            <input type="radio" value="Correct result" name="Status" />
            <Text1>Correct result</Text1>
                </div>
            <div className="  flex flex-row gap-2 pl-14 mr-0.5 ">
            <input type="radio" value="Incorrect result" name="Status" />
            <Text1>Incorrect result</Text1>
            </div>

            <div className="  flex flex-row gap-2 pl-9">
            <input type="radio" value="Swiss result" name="Status" />
            <Text1>Swiss result</Text1>
            </div>

            <div className="  flex flex-row gap-2 pl-7 ">
            <input type="radio" value="FNG Result" name="Status" />
            <Text1>FNG result</Text1>
            </div>
                
            </div>


       
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center    ">  

                    <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Programme</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxsheet ">
                        <select >
                            <option selected>Computer Science </option> 
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 
                  
                    </div> 



                  
               <div className="flex  justify-center  ">
                        
               <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Level</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxsheet ">
                        <select >
                            <option selected>100 </option> 
                            <option>100</option>
                            <option>100</option>
                            <option>100</option>
                            <option>100</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 
                           
                        
       
                        </div>
                  
                            

                    <div className="flex justify-center   ">
                    <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Semester</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxsheet ">
                        <select >
                            <option selected>1st semester 2020-2021</option> 
                            <option>1st semester 2020-2021</option>
                            <option>1st semester 2020-2021</option>
                            <option>1st semester 2020-2021</option>
                            <option>1st semester 2020-2021</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 
                    

                    </div> 

                    <div className="flex justify-center  ">
                    <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Reduce level by</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxsheet ">
                        <select >
                            <option selected>Nill </option> 
                            <option>Nill</option>
                            <option>Nill</option>
                            <option>Nill</option>
                            <option>Nill</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 
                           
                            
                            </div>

                </div>
                  </div> 

        
                  <div className='flex justify-end pr-5 '>
                            <RectangleRootRoot>
                <Text1a>Show</Text1a>
                </RectangleRootRoot> 
                       </div>

                       </div>


    </div>
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

const Text1 = styled.div`
  color: #505050;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  
`;

const FlexColumn2aw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center; 
  align-items: center;
  margin: ${(props) => props.margin};
`;

const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

`;


const RectangleRootRoot = styled.div`
  width: 183px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #787878;
  background-color: #2d0353;
  border-radius: 6px;
  padding: 10.5px 0px 9.5px 0px;
  border-width: 0.5px;
`;
const Text1a = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
`;

const EditProfileRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  display:flex;
  justify-content: center; 
  margin-bottom: 10px; 
  font-weight: bold;
  padding-top: 20px;
`;




export default MasterSheet