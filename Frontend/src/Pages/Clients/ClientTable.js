import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact"; // Import MDBReact components
import axios from "axios";

export default function ClientTable() {
  const [allClient, setAllClient] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users')
      .then((response) => {
        console.log('API Response:', response.data);  
        setAllClient(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const deleteClient = (id) => {
    axios
      .delete(`your-api-endpoint/${id}`)
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        setAllClient(allClient.filter(user => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
           {allClient.map((client, index) => ( 
            <tr >
              <td>{client.name}</td>
              <td>{client.country}</td>
              <td>sample</td>
              <td>
                <button style={{padding:'5px',border:'none'}} onClick={() => deleteClient()}>
                  delete
                </button>
              
              </td>
            </tr>
           ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}