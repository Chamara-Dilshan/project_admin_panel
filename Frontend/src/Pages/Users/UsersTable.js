import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const UsersTable = ({rows, selectedUser, deleteUser,setModalIsOpen,mode,setMode}) => {
    console.log('Received rows:', rows);
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Emp No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                            {row.image && (
                                <img
                                src={URL.createObjectURL(row.image)}
                                alt={`User ${row.id} Image`}
                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                            )}
                            </TableCell>
                            <TableCell>{row.team}</TableCell>
                                        
                            
                            <TableCell>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => {
                                        setMode('edit')
                                        setModalIsOpen(true)
                                        selectedUser({id: row.id, name: row.name, image: row.image, team: row.team })
                                        console.log("mode",mode);
                                        }}>
                                    Edit
                                </Button>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => deleteUser({id: row.id})}
                                >
                                    Delete
                                </Button>
                            </TableCell>

                        </TableRow>
                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>

                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default UsersTable
