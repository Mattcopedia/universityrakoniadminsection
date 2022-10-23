
       import React from "react"; 
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
       import Stats from ".././assets/img/stats.PNG"
    
      import "../components/br.css"

   

       

export default function Dashboard() {  
       
   

    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 mb-5 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn1>
                <FlexRow>
                  <Text10>Rakoni Admin</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Admin Name<br className="responsivemodal"></br> </Text30>
              </FlexColumn1>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
       

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>


              <div className="mx-7 my-4 ">
                   
                   <div className="container mx-auto mb-4 bg-gray-100 "> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>Active User</Text1>
                        <Text2>104</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/rdHMQezg1KzIaMJDvrJR.svg`} />
                    </NeonCarrotFlexRow>
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                              
                           <NeonCarrotFlexRow>
                    <FlexColumn width={`160px`}>
                        <Text1>De-activated User</Text1>
                        <Text2>10</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/jGQZQJGhosd5LZaDfLgQ.svg`} />
                    </NeonCarrotFlexRow>

                         

                           </div>
                         
                           <div className="flex flex-row justify-center text-6xl border-2 bg-gray-100   p-6 ">

                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>New Request</Text1>
                        <Text2>5</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/JmmAp0klWVKBPSsMCdGK.svg`} />
                    </NeonCarrotFlexRow>


                          


                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2 bg-gray-100 p-6 "> 

                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>New Chat</Text1>
                        <Text2>4</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/oVYFchfJYZHm18LyKBc6.svg`} />
                    </NeonCarrotFlexRow>

                           </div>
                            
                       </div>
                         </div>
                         </div>  
              
              <section className=" mb-4 body-font overflow-hidden lg:mr-0 mr-3"> 
      <div className="container ">
    <div className="flex flex-wrap gap-3  ">
      <div className=" md:w-1/2 flex flex-col pb-2 -m-5 items-start">
        <div className="flex items-center flex-wrap ml-9 w-full">

        <h1 className="text-left mx-7 text-indigo-900 font-medium text-lg mt-5">New User</h1>  
         <img  width={500} height={700} src={Stats} alt="Student Affairs" />
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col items-start ">
        <div className="flex items-center flex-wrap ml-5 w-full mt-3 lg:mt-0">
          
        <h1 className="text-left mx-7 text-indigo-900 font-medium text-lg">Active User</h1>  
         <img width={500} height={700} src={Stats} alt="Student Affairs" />
        </div>
      
      </div>
    </div>
  </div>
</section>

 
              
        
           
            

            

                         <div>

                         </div>
                         </div> 
                  
        </>
    );
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











const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 32px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;




const FlexColumn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13px;
  flex-grow: 1;
  align-items: center;
  width: ${(props) => props.width};
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #505050;
`;
const Text2 = styled.div`
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  color: #505050;
  align-self: flex-start;
`;

const NeonCarrotFlexRow = styled.div`
  width: 239px;
  background-color: #E9F4EE;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const Image1 = styled.img`
  width: 50px;
  height: 50px;
`;









































