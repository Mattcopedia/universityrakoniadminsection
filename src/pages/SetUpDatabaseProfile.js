import React,{useState} from 'react'
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import SetUpDatabaseHeader from './SetUpDatabaseHeade';
import profilephoto from "../assets/img/profileUpload.PNG";

const SetUpDatabaseProfile = () => {

    const [submit, setSubmit] = useState(false);

  return (

     <>
   
    
    { submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraph>
        Student Status <br className="responsivemodal"></br>has been updated
          successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}




    <div>
        <SetUpDatabaseHeader />

                               <div className="flex flex-wrap">
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   mx-  mt-4">
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
      <Link to="/setup-database">
      <button className="editunblock">Set-Up Database</button> 
      </Link>
      
      </div>
      
    
      <div className="mt-4"> 
      <Link to="/edit-account">
      <button className="editprofile2"> Edit Profile</button>  
      </Link>
      
      </div>
      
    </WhiteFlexColumnRootyw>
    
    </div>
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4 ">
  <WhiteFlexRowRootzw>
      <FlexColumnzw>
          
          <div className="flex flex-row">
        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
          <Text1zw margin={`0`}>University name</Text1zw>
          <Text2zw alignSelf={`inherit`}>Federal University of Technlogy, Akure.</Text2zw>
        </FlexColumn1zw>
        
        </div>
        
             
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Email</Text1zw>
          <Text2zw alignSelf={`inherit`}>info@Futa.edu.ng</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Phone number</Text1zw>
          <Text2zw alignSelf={`inherit`}>+2348052613220</Text2zw>
        </FlexColumn1zw>
        
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
        <Text1zw margin={`0`}> University website</Text1zw>
          <Text2zw alignSelf={`flex-start`}>Futa.edu.ng</Text2zw>
        </FlexColumn1zw> 

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Registration date</Text1zw>
          <Text2zw alignSelf={`flex-start`}>24/10/2021</Text2zw>
        </FlexColumn1zw> 

      </FlexColumnzw>

   

    </WhiteFlexRowRootzw> 
    
    </div>
  <div className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   "> 
 
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





const WhiteFlexRowRootzw = styled.div`
  max-width: 409px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 83px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 

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








export default SetUpDatabaseProfile