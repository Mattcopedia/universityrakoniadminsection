import React from 'react'
import NewRequestHeader from './NewRequestHeader'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NewRequestDetails = () => {
  return (
    <>
    <NewRequestHeader />
    <div>

    <div className='pb-5'>
              <PreviewRootRoot>Request Details</PreviewRootRoot>
              </div>
      
        <NewRootRootRoot>
              <WhiteFlexRow>
                <FlexColumn>
                  <FlexColumn1>
                    <StudentID>University name</StudentID>
                    <StudentID1>Federal University of Technology Akure</StudentID1>
                  </FlexColumn1>

                  <FlexColumn1>
                    <StudentID>Email</StudentID>
                    <StudentID1>info@futa.edu.ng</StudentID1>
                  </FlexColumn1>

                  <FlexColumn1>
                    <StudentID>Phone number</StudentID>
                    <StudentID1>+2348052613220</StudentID1>
                  </FlexColumn1>

                  <FlexColumn2>
                    <StudentID>Note</StudentID>
                    <StudentID3>
                      Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed
                      adipiscing  <br />tellus turpis felis <br />diam  ullamcorper non, egestas.<br />
                      
                    </StudentID3>
                  </FlexColumn2>
                  <Line src={`https://file.rendit.io/n/CCbnd52cZ1OJ9cQ6NRrB.svg`} />
                  <Link to="/new-request">
                  <FlexRow>
                    <RoyalPurpleText>Ok</RoyalPurpleText>
                  </FlexRow>
                  </Link>
        
                </FlexColumn>
              </WhiteFlexRow>
            </NewRootRootRoot>
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






  const StudentID = styled.div`
  color: #2d0353;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  white-space: nowrap;
`;
const NewRootRootRoot = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom:20px;

`;
const WhiteFlexRow = styled.div`
   margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 6px;
  padding: 35px 35px 36px 35px;

    @media ${devices.mobileL} {
       padding-top: 20px;
       padding-bottom: 20px;
       padding-left: 25px;
       padding-right: 25px;
   
    }
`;
const FlexColumn = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn1 = styled.div`

  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 0px 20px 0px;
`;
const StudentID1 = styled.div`
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 14.5px 0px;
`;
const StudentID3 = styled.div`
  align-self: flex-end;
  color: #787878;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Line = styled.img`
  height: 0.5px;
  margin: 0px 0px 21px 0px;
`;


const FlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;

    @media ${devices.mobileL} {
        align-self: start;
    }
`;


const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 120px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;

`;


const PreviewRootRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;
   margin:auto;
   display:flex;
   justify-content:center;

`;

export default NewRequestDetails