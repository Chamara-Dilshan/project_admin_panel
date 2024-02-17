import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ProjectTable = ({rows, selectedProject, deleteProject}) => {
    console.log('Received rows:', rows);
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.name} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => selectedProject({name: row.name })}
                                >
                                    Edite
                                </Button>
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={() => deleteProject({id: row.id})}
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

export default ProjectTable
