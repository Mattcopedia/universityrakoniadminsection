import React from 'react'
import styled from "styled-components";

const SettingsInfo = () => {
  return (
    <div>
          <WhiteFlexRowRootzw>
             <div className=''>
                    <FlexColumnzw>
                    
                    <ImageRootRoot src={`https://file.rendit.io/n/vFUHpFdwjFv6QTeXp7k0.png`} />
                   

                    <div className='flex justify-start '>
                    <EditProfileRootx>Federal University of Technology, Akure</EditProfileRootx>
                    </div> 

                    <Text2zw alignSelf={`center`}>Software by RAKONI</Text2zw>
                      
                    <div className='flex justify-start'>
                    <EditProfileRoot>University Information</EditProfileRoot>
                    </div> 
                       
                        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
                        <Text1zw margin={`0`}>Website</Text1zw>
                        <Text2zw alignSelf={`inherit`}>www.wikpedia.com</Text2zw>
                        </FlexColumn1zw>
                        
                      
        
                        <FlexColumn1zw margin={`0`}>
                        <Text1zw margin={`0px 0px 0px 1px`}>Email Address</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Info@rakoni.edu.ng</Text2zw>
                        </FlexColumn1zw>
                        
                  
                        <FlexColumn1zw margin={`0px 20px 0px 1px`}>
                        <Text1zw margin={`0`}>Phone number</Text1zw>
                        <Text2zw alignSelf={`inherit`}>09030009002</Text2zw>
                        </FlexColumn1zw>
        

                        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
                        <Text1zw margin={`0`}>University Location</Text1zw>
                        <Text2zw alignSelf={`inherit`}> Ikeja,Lagos Nigeria</Text2zw>
                        </FlexColumn1zw> 

                        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
                        <Text1zw margin={`0`}>Social Media</Text1zw>
                        <Text2zw alignSelf={`flex-start`}> rakoni@facebook.com</Text2zw>
                        <Text2zw alignSelf={`flex-start`}> rakoni@twitter.com</Text2zw>
                        </FlexColumn1zw> 

                    </FlexColumnzw>
                    </div>
                    </WhiteFlexRowRootzw> 

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


const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;



const Text1zw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 18px;
  color: #2d0353;
  font-weight:bold;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;





const WhiteFlexRowRootzw = styled.div`
  max-width: 480px;
  // max-height:1100px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 60px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 
  padding-top:90px;
  padding-bottom:72px;

  @media ${devices.mobileL} { 
    margin-left: 0px;
    padding: 45px 8px;

    } 
`;



const FlexColumnzw = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
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

const EditProfileRootx = styled.p`
color: #2d0353;
font-size: 24px;
font-family: Product Sans Medium;
line-height: 23.28px;
display:flex;
text-align:center; 
margin-bottom: 10px;
`;


const ImageRootRoot = styled.img`
  width: 102px;
  height: 102px;
  display:flex;
justify-content: center; 
margin:auto;
`;

export default SettingsInfo