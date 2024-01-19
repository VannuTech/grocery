import { CFormInput } from '@coreui/react';
import React, { useState } from 'react';
import axios from 'axios';

const AddUser =  () => {
const [quantity, setquantity] = useState("")

    const [groceryName, setgroceryName] = useState("")
    const handleChange = (e) => {
        setgroceryName(e.target.value)
    }
    const handleChangeQuantity = (e) => {
        setquantity(e.target.value)
    }
const handleSubmit = async() => {
const data = {};
data.grocery_name = groceryName;
data.quantity = quantity;
alert(JSON.stringify(data))
try {
    const response = await axios.post('http://localhost:8081/api/v1/createContact', data);
    // Extract the relevant data from the response
    const { res } = response;
    alert(JSON.stringify(res.message))
    console.log('Data from API:', res);
    
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
  }
}

    return ( <>
    <div style={{ display: 'flex', flexDirection: 'row' }}> 
  <div style={{ marginRight: '10px' }}>
    Grocery Name:
    <CFormInput name="groceryName" value={groceryName} onChange={(e) => handleChange(e)} />
  </div>

  <div>
    Quantity:
    <CFormInput name="quantity" value={quantity} onChange={(e) => handleChangeQuantity(e)} />
  </div>
  <div>
  </div>
 
</div>
<button onClick={()=>handleSubmit()}>Add Grocery</button>
        
        </>
    )
}
export default AddUser