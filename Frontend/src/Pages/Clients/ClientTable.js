import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ClientTable = ({rows, selectedClient, deleteClient}) => {
    console.log('Received rows:', rows);
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Client Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Profile Image</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Sample Links</TableCell>
                    <TableCell>Sample Images</TableCell>
                    <TableCell>Other</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.name} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.profileImage}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.sampleLinks}</TableCell>
                            <TableCell>{row.sampleImages}</TableCell>
                            <TableCell>{row.other}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => selectedClient({ ...row })}
                                >
                                    Edit
                                </Button>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => deleteClient({id: row.id})}
                                >
                                    Delete
                                </Button>
                            </TableCell>

                        </TableRow>
                    )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell colSpan={8} component='th' scope="row">No Data</TableCell>
                        </TableRow>

                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ClientTable
