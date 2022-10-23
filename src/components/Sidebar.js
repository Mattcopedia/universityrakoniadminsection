import { useState } from 'react';
import styled from "styled-components";  
import AdminNavbar from './AdminNavbar';
import {NavLink} from "react-router-dom";  
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';  
import "./br.css"
import unigig from "../assets/img/unigig.jpg"

 
 
export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}  
            />
            <div
                className={` fixed   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden  transition-all duration-300 bg-white`} >  

                         


                <Element7>
                

                <Line src={`https://file.rendit.io/n/HyUCUJJkXhfGGVECnrB6.svg`} />
                <PlumFlexColumn>

                  <div className='md:hidden ml-20 pl-20'>
                       <Button
                           
                            buttonType="link" 
                            size="lg"
                            iconOnly  
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                  </div>
                
                  <NavLink to="/" exact  >
                  <ImageRoot src={unigig}  /> 
                  </NavLink>
     
                  <NavLink to="/create-rakoni-account" >
                  <WhiteFlexRow onClick={() => setShowSidebar('-left-64')}>
                <Image1a src={`https://file.rendit.io/n/7OUSS3WQDM8590MQKxa2.svg`} />
                <Text2a>Create Account</Text2a> 
              </WhiteFlexRow>
              </NavLink>

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Dashboard</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>

                     <div className='focus:blue'>
                     <NavLink to="/setup-database-profile" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/2Iqy0d4lFfqeAt1AAFyK.svg`} />
                    <Text2  margin={`0px 45px 0px 0px`}  > Set up Database</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>


                     <div className='focus:blue'>
                     <NavLink to="/create-sub-domain" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/oeNYp8KzG7eO9llRgEBI.svg`} />
                    <Text2  margin={`0px 70px 0px 0px`}  > Sub-domain</Text2> 
             
                  </FlexRow2>  
                  </NavLink>   
             
                     </div>

                     <NavLink to="/new-request-details" exact  >
                         <FlexRow7>
                  <FlexRow8>
                    <WhiteRectangle />

                    <Image3 src={`https://file.rendit.io/n/RiHraye6ykgVBkmjYrCg.svg`} />
                    <Text3>New Request</Text3>
                  </FlexRow8>
                  <FlexColumn2>
                    <NeonCarrotRectangle2 />
                    <Text7>4</Text7>
                  </FlexColumn2>
                </FlexRow7>
                </NavLink>

            




                     <div className='focus:blue'>
                     <NavLink to="/activate-universityprofile" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/m4CBEsJTWUcsPOt7f6Dj.svg`}/>
                    <Text2  margin={`0px 27px 0px 0px`}  > Activate/Deactivate</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>


                     <div className='focus:blue'>
                     <NavLink to="/routine-check" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/PkrQdzit8HdJYssUFtjX.svg`} />
                    <Text2  margin={`0px 58px 0px 0px`}  > Routine Check</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>


                     <FlexRow71>
                  <FlexRow81>
                    <WhiteRectangle />
                    <Image31 src={`https://file.rendit.io/n/NnZ32NUgGZ2odJrfh42S.svg`} />
                    <WhiteRectangle1 />
                    
                    <Text32>Chat Bot</Text32>
                  </FlexRow81>
                  <FlexColumn20>
                    <NeonCarrotRectangle2 />
                    <Text70>2</Text70>
                  </FlexColumn20>
                </FlexRow71>

                     <div className='focus:blue'>
                     <NavLink to="/password-reset" exact  >
                  <FlexRow2 margin={`0px 0px 26px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 1px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/6oPVdMsd0HvcFxT8YfDh.svg`} />
                    <Text2  margin={`0px 52px 0px 0px`}  > Password Reset</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>

                  
                </PlumFlexColumn> 
                
              </Element7>
        


            </div>
        </>
    );
}

const ImageRoot = styled.img`
width: 120px;
height: px50;
padding-bottom:20px;

`;

const NeonCarrotRectangle = styled.div`
  width: 2px;
  height: 0px;
  background-color: #df8909;
  opacity: 0;
  margin: ${(props) => props.margin};
`;
const Text2 = styled.a`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #ffffff;
  margin: ${(props) => props.margin};
  
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;

const FlexRow2 = styled.div`
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }


`;


const Element7 = styled.div`
  width: 237px;
  height: 900px;
  position: relative;
  flex-grow: 1; 
`;
const Line = styled.img`
  width: 38px;
  height: 4px;
  position: absolute;
  top: 699px;
  left: 106px;
`;
const PlumFlexColumn = styled.div`
  height: 818px;
  background-color: #250444;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 41px 23px 41px 0px;
`;

const Image1 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 18px 0px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;


const WhiteFlexRow = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 11px 16px 11px 11px;
  margin: 0px 0px 37px 0px;
  margin-right:15px;
`;
const Image1a = styled.img`
  width: 24px;
  height: 24px;
`;

const Text2a = styled.div`
  align-self: flex-end;
  color: #2d0353;
  font-size: 14px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  white-space: nowrap;
`;




const WhiteRectangle = styled.div`
  width: 3px;
  height: 22px;
  background-color: rgba(256, 256, 255, 0);
`;
const WhiteRectangle1 = styled.div`
  width: 30px;
  height: 22px;
  background-color: rgba(256, 256, 255, 0);
`;
const Text3 = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  white-space: nowrap;
  padding-right:9px;
  cursor:pointer;
  
   
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
  `;
const Text32 = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  white-space: nowrap;
  padding-right:9px;
  cursor:pointer;
   
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;
const Image3 = styled.img`
  width: 20px;
  height: 20px;
  margin-right:13px;


   
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;

const Image31 = styled.img`
  width: 20px;
  height: 20px;

   
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;

const Text7 = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;

const Text70 = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  
`;


const FlexRow7 = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 25px 0px;
  margin-top:0px;
`;
const FlexRow71 = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 23px 0px;
`;
const FlexRow8 = styled.div`
  width: 106px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexRow81 = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right:25px;
`;
const FlexColumn2 = styled.div`
  width: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  padding: 0px 9px;
`;

const FlexColumn20 = styled.div`
  width: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  padding: 0px 9px;
 
`;

const NeonCarrotRectangle2 = styled.div`
  width: 26px;
  height: 18px;
  left: 0px;
  top: 1px;
  position: absolute;
  border-radius: 10.5px;
  background-color: #df8909;
`;