
import React,{useState} from 'react' 
import styled from "styled-components";
import Sidebar from 'components/Sidebar'
import data from "./Mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";


const RoutineCheck = () => {
    const [query, setQuery] = useState("")

    const keys = ["Status"]
    
    // eslint-disable-next-line
    const [contacts, setContacts] = useState(data);

    const search = (contact) => {
        return contact.filter(
          (item) => 
            keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
        );
      };

  return (

    <> 
  
  <div>
        <Sidebar />
        <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Routine<br className="responsivemodal"></br> Check</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot  src={`https://file.rendit.io/n/LCjVN8TXZDDBcGO33yNf.png`} /> 
       </div>  
     
    </div> 
 
    </div>

    <div>
    <div className='flex flex-row gap-2 justify-end'>
    <RectangleRootRoot1>
      <Image10 src={`https://file.rendit.io/n/fpQeBlE22CBocn7NjJ0S.svg`} />
      <Text10 placeholder={`Filter by Active`} type="text" onChange={(e) => setQuery(e.target.value)}  />
    </RectangleRootRoot1>

    <div className='pr-6'>
    <RectangleRoot>
      <FlexRow>
        
        <Text1>Download </Text1>
      </FlexRow>
    </RectangleRoot>
    </div>
    </div> 
               <div style={{overflowX: "auto"}} className='bg-white mx-6 my-6 '> 
     <table className='Yourdoc' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"5%"}}><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></th>
         <th style={{width:"8%"}}>Acronym</th>
         <th style={{width:"33%"}}>University</th>
         <th style={{width:"14%"}}><span>Reg No</span></th>      
         <th style={{width:"15%"}}>Email</th>
         <th style={{width:"15%"}}>Phone Number</th>
         <th style={{width:"14%"}}>Status</th>
     </tr>    

     
      <tbody>
     <>
               
               <ReadOnlyRow
                 
                 contact={search(contacts)} 
                
               />
             
           </>
           </tbody>



     
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













const RectangleRoot = styled.div`
  border-style: solid;
  border-color: #2d0353;
  width: 163px;
  mix-blend-mode: normal;
  background-color: #f0f0f0;
  padding-right: 20px;
  border-radius: 6px;
  padding: 11.5px ; 
  border-width: 0.5px;
 margin-top: 2px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
 
`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
 
`;





  
const RectangleRootRoot1 = styled.div`
max-width: 217px;
gap: 14px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
background-color: #fafafa;
border-radius: 6px;
padding: 4px 4px;
margin-bottom: 11px;
`;
const Image10 = styled.img`
width: 15px;
height: 15px;
`;
const Text10 = styled.input`
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



export default RoutineCheck