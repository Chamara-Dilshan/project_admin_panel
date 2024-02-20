import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact"; // Import MDBReact components
import axios from "axios";

export default function UserTable() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users')
      .then((response) => {
        console.log('API Response:', response.data);  
        setAllUsers(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`your-api-endpoint/${id}`)
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        setAllUsers(allUsers.filter(user => user.id !== id));
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
            <th>Employee No</th>
            <th>Team</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {/* {allUsers.map((user, index) => ( */}
            <tr >
              <td>Nirmal</td>
              <td>5</td>
              <td>flutter</td>
              <td>
                <button style={{padding:'5px',border:'none'}} onClick={() => deleteUser()}>
                  delete
                </button>
              
              </td>
            </tr>
          {/* ))} */}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
