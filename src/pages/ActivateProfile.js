import React,{useState} from 'react'
import styled from "styled-components"; 
import profilephoto from "../assets/img/profileUpload.PNG";
import ActivateHeader from './ActivateHeader';

const ActivateProfile = () => {

    const [submit, setSubmit] = useState(false);
    const [shouldshow, setShouldshow] = useState(false);
    const [shouldshowreminder, setShouldshowreminder] = useState(false);
    const [submitreminder, setSubmitreminder] = useState(false);

  return (

     <>
    { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/sTOHrcyJpvB1xdSHuhfh.svg`} />
        <Text1>Information</Text1>
        <Paragraph>
          Are you sure you want to <br className="responsivemodal"></br>Deactivate this university{" "}
        </Paragraph>
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
        <Text1>Successful</Text1>
        <Paragraph>
        University has been <br className="responsivemodal"></br> de-activated successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}





{ shouldshowreminder && (
        <ModalBackground onClick={() => setShouldshowreminder(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <RectangleRootRoot>
      <Text100>Reminder email</Text100>
      <Text2>Please provide reminding information </Text2>
      <WhiteRectangle />
      <RoyalPurpleText0>Send</RoyalPurpleText0>
    </RectangleRootRoot>

    
            </ModalBody>
        </ModalBackground>
      )}


{ submitreminder && (
        <ModalBackground onClick={() => setSubmitreminder(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraph>
        Reminder email has been <br className="responsivemodal"></br> sent successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setSubmitreminder(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}




    <div>
        <ActivateHeader />

                               <div className="max-w-7xl  grid grid-cols-12 ml-2 ">
  <div className="col-span-12 md:col-span-12 object-fill lg:col-span-4 bg-gray-100">
  <WhiteFlexColumnRootyw>
      <Ellipseyw src={profilephoto} />
      <FlexColumnyw>
        <Text1yw>University</Text1yw>
        <Text2yw>FUTA</Text2yw>
      </FlexColumnyw>

      <FlexColumnyw>
        <Text1yw >University ID:</Text1yw>
        <Text2yw onClick={() => setSubmit(true)}>Uni/1992/FUTA</Text2yw>
      </FlexColumnyw>

      <div className=""> 
    
      <button onClick={() => setShouldshow(true)} className="editactivate">Deactivate</button> 
    
      
      </div>
      
    
      <div className="mt-4"> 
    
      <button onClick={() => setShouldshowreminder(true)} className="editprofile2"> Send Reminder</button>  
   
      
      </div>
      
    </WhiteFlexColumnRootyw>
    
    </div>
  <div className="col-span-12 md:col-span-12 lg:col-span-8  ">
  <WhiteFlexRowRootzw>
      <FlexColumnzw>
          
          <div className="flex flex-row">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>University name</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Federal University of Technlogy, Akure.</Text2zw>
        </FlexColumn1zw>
        
        </div>

        <div className="flex flex-row lg:gap-8">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>Email</Text1zw>
          <Text2zw alignSelf={`flex-start`}>info@Futa.edu.ng</Text2zw>
        </FlexColumn1zw>
          
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Phone number</Text1zw>
          <Text2zw alignSelf={`flex-start`}>+2348052613220</Text2zw>
        </FlexColumn1zw>
        
        </div>

        <div className="flex flex-row lg:gap-16">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>University website</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Futa.edu.ng</Text2zw>
        </FlexColumn1zw>
          
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Registration date</Text1zw>
          <Text2zw alignSelf={`flex-start`}>24/10/2021</Text2zw>
        </FlexColumn1zw>
        
        </div>

        <div className="flex flex-col lg:flex-row">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>Domain name</Text1zw>
          <Text2zw alignSelf={`flex-start`}>University@rakoni.com</Text2zw>
        </FlexColumn1zw>
          
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Sub Domain name</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Universitysub@rakoni.com</Text2zw>
        </FlexColumn1zw>
        
        </div>

        <div className="flex flex-row lg:gap-24">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>Contract</Text1zw>
          <Text3zw alignSelf={`flex-start`}>3 months</Text3zw>
        </FlexColumn1zw>
          
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Reminder Counter</Text1zw>
          <Text3zw alignSelf={`flex-start`}>2 Times</Text3zw>
        </FlexColumn1zw>
        
        </div>
        
             
    
      </FlexColumnzw>

   

    </WhiteFlexRowRootzw> 
    
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



const WhiteFlexColumnRootyw = styled.div`
  max-height: 700px;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 41px 43px 30px 44px;
  margin-left: 10px; 
  margin-bottom: 10px; 
  margin-top: 1px;
`;
const Ellipseyw = styled.img`
  max-width: 141px;
  height: 141px;
  margin: 0px 0px 25px 0px;
`;
const FlexColumnyw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text1yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;
const Text2yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
  font-weight: bold;
`;


const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text1zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;

const Text3zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #eb5757;
  align-self: ${(props) => props.alignSelf};
`;





const WhiteFlexRowRootzw = styled.div`
  max-width: 600px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 100px 58px;
  margin-left: 5px;
  margin-right:5px; 


`;



const FlexColumnzw = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
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
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraph = styled.div`
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





const RectangleRootRoot = styled.div`
  max-width: 391px;
  height: 263px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 28px 38px 22px 38px;
  border-radius: 6px;
  background-color: #fafafa;
  margin:auto;

  @media ${devices.mobileL} { 
      
  }
`;
const Text100 = styled.div`
  margin: 0px 0px 21px 0px;
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  margin: 0px 0px 9px 0px;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: pre-wrap;
`;
const WhiteRectangle = styled.textarea`
  height: 125px;
  align-self: stretch;
  margin: 0px 0px 18px 0px;
  border-width: 0.5px;
  border-radius: 6px;
  border-style: solid;
  border-color: #b3b1b1;
  background-color: #ffffff;

  @media ${devices.mobileL} { 
    width: 100%;
  } 

`;
const RoyalPurpleText0 = styled.div`
  width: 40px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 11px 70px 10px 43px;
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  white-space: nowrap;
  border-radius: 6px;
  background-color: #2d0353;
`;







export default ActivateProfile