import React,{ Fragment} from 'react'
import styled from "styled-components"; 


const ReadOnlyRow = ({ contact }) => {
  return (

    contact.map((contacting) => (
      <Fragment>

        <tr key={contacting.id} style={{height:"70px"}}> 

        <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
          <td  ><label><Text3>{contacting.Acronym}</Text3></label></td>
          <td ><label><Text3>{contacting.University}</Text3></label></td>
          <td ><label><Text3>{contacting.RegNumber}</Text3></label></td>
          <td  ><label><Text3>{contacting.Email}</Text3></label></td> 
          <td ><label><Text3>{contacting.PhoneNumber}</Text3></label></td>
          <td ><label>{contacting.Status === "Active" ? <Text3>{contacting.Status}</Text3> : <Text4>{contacting.Status}</Text4> }</label></td>
          <td></td>

        </tr>
    
     </Fragment>
    ))


  );
};



const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;

const Text4 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #BC0909;
  text-align: left;
 
`;
export default ReadOnlyRow;

;




