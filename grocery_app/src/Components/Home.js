import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CTableHead, CTableRow, CTableHeaderCell, CTable } from '@coreui/react';
import AddUser from './AddUser';

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/getContacts');
      // Extract the relevant data from the response
      const { data } = response;
      console.log('Data from API:', data);
      setUserData(data);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  };

  return (
    <CTable style={{ justifyContent: 'center' }}>
      <CTableHead>
       
      <AddUser/>
        <CTableRow> {JSON.stringify(userData)}
          {/* Assuming userData is an array, map through it to render cells */}
          {/* {userData.map((user, index) => (
            // Use a unique key for each row in the map
            <CTableHeaderCell key={index} scope="col">
              {user}
            </CTableHeaderCell>
          ))} */}
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    </CTable>
  );
};

export default Home;
