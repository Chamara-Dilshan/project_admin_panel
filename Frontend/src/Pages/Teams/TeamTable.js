import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TeamTable = ({setMode,rows, selectedTeam, deleteTeam,setModalIsOpen}) => {
    console.log('Received rows:', rows);
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.name} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => {
                                        setMode('edit')
                                        setModalIsOpen(true)
                                        selectedTeam({name: row.name, description: row.description })}}
                                >
                                    Edit
                                </Button>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => {deleteTeam({id: row.id})}}
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

export default TeamTable
