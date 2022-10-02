import Sidebar from 'components/Sidebar';
import React,{useState} from 'react'
import styled from "styled-components"; 


const LecturerList = () => {

    const [shouldshow, setShouldshow] = useState(false);
    const [submit, setSubmit] = useState(false);

  return (
    <>
      { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1li>Information</Text1li>
        <Paragraphli>
          Are you sure you want to <br className="responsivemodal"></br>delete this lecturer{" "}
        </Paragraphli>
        <div className='flex flex-row gap-2'>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>No</RoyalPurpleText>
        <RoyalPurpleTextw>Yes</RoyalPurpleTextw>
        </div>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
    
    { submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1li>Successful</Text1li>
        <Paragraphli>
        Lecturer account <br className="responsivemodal"></br>has been deleted
          successfully{" "}
        </Paragraphli>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>
    
            </ModalBody>
        </ModalBackground>
      )}
    <div>
        <Sidebar />


        
        <div className="grid grid-cols-5 py-4 mx-4 mb-7 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Lecturer<br className="responsivemodal"></br> List</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/o8aJUc2EgCij2G5D4ZSY.png`} /> 
       </div>  
     
    </div>

  {/* here */}

  <div className='ml-3 flex justify-start'>
  <EditProfileRoot>List of all Staff in the department</EditProfileRoot>
  </div>

  <div className='flex flex-row gap-2 justify-end mr-2'>

  <RectangleRootRoot>
      <Image1 src={`https://file.rendit.io/n/WOYHGlmF8wVVWkrvRppv.svg`} />
      <Text1 placeholder={`Search`} />
    </RectangleRootRoot>


    </div>





    <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
      
       <th style={{width:"5%",paddingLeft:"10px"}}>S/N</th> 
       <th style={{width:"15%"}}>Full Name</th> 
       <th style={{width:"10%"}}>User ID</th> 
       <th style={{width:"15%"}}>Department</th> 
       <th style={{width:"17.5%"}}>Email</th> 
       <th style={{width:"17.5%"}}>Phone number</th> 
       <th style={{width:"12%"}}>Role</th> 
       <th style={{width:"4%"}}></th> 
       <th style={{width:"4%"}}></th> 
      
   </tr>    

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>1</Text3></label></td>
       <td ><label><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label><Text3>AyFelix</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>Ay.Akinyemi.ng.com</Text3></label></td> 
       <td><label><Text3>08115659040</Text3></label></td>
       <td><label><Text3>Lecturer</Text3></label></td>
       <td><label> <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} />    </label></td>
       <td><label> <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} />  </label></td>
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px" }}><label> <Text3>2</Text3></label></td>
       <td ><label><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label><Text3>AyFelix</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>Ay.Akinyemi.ng.com</Text3></label></td> 
       <td><label><Text3>08115659040</Text3></label></td>
       <td><label><Text3>Lecturer</Text3></label></td>
       <td><label> <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} />    </label></td>
       <td><label> <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} />  </label></td>
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>3</Text3></label></td>
       <td ><label><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label><Text3>AyFelix</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>Ay.Akinyemi.ng.com</Text3></label></td> 
       <td><label><Text3>08115659040</Text3></label></td>
       <td><label><Text3>Lecturer</Text3></label></td>
       <td><label> <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} />    </label></td>
       <td><label> <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} />  </label></td>
   </tr> 

   <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>4</Text3></label></td>
       <td ><label><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label><Text3>AyFelix</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>Ay.Akinyemi.ng.com</Text3></label></td> 
       <td><label><Text3>08115659040</Text3></label></td>
       <td><label><Text3>Lecturer</Text3></label></td>
       <td><label> <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} />    </label></td>
       <td><label> <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} />  </label></td>
   </tr> 

   <tr style={{height:"70px"}}> 
       <td style={{paddingLeft:"10px"}}><label> <Text3>5</Text3></label></td>
       <td ><label><Text3>Ayomide Akinyemi</Text3></label></td>
       <td><label><Text3>AyFelix</Text3></label></td>
       <td><label><Text3>Computer Science</Text3></label></td>
       <td><label><Text3>Ay.Akinyemi.ng.com</Text3></label></td> 
       <td><label><Text3>08115659040</Text3></label></td>
       <td><label><Text3>Lecturer</Text3></label></td>
       <td><label> <Image1w src={`https://file.rendit.io/n/aIETGJBavFzwQQbRItRl.svg`} />    </label></td>
       <td><label> <Image2w src={`https://file.rendit.io/n/QUmyxyKP3Y1qGXDYg88R.svg`} />  </label></td>
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

  
  const RectangleRootRoot = styled.div`
  max-width: 217px;
  gap: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
  border-radius: 6px;
  padding: 4px 4px;
`;
const Image1 = styled.img`
  width: 15px;
  height: 15px;
`;
const Text1 = styled.input`
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

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
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

const Image1w = styled.img`
  width: 9px;
  height: 12px;
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
`;
const Image2w = styled.img`
  width: 10px;
  height: 13px;
`;


const ModalBackground = styled.div`
     position:fixed;
     z-index: 1;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     overflow: auto;
     background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
     background-color: white;
     margin: 10% auto;
     padding: 20px; 
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 

      @media ${devices.mobileL} { 
        width: 100%;
      } 

`



const WhiteFlexColumnRoot = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumn = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2 = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1li = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphli = styled.div`
  text-align: center;
  width: 313px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  margin: 0px 0px 32px 0px;
  white-space: pre-wrap;

  @media ${devices.mobileL} { 
    margin-left:10px; 
    margin-right:10px;
  } 

`;
const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 170px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;


const RoyalPurpleTextw = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: black;
  width: 170px;
  height: 45px;
  background-color: #f0f0f0;
  flex-direction: row;
  justify-content: center; 
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;




export default LecturerList