import { Grid, Typography, Button, Input, Select, MenuItem, InputLabel, FormControl, Chip  } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ProjectForm = ({mode,setMode,addProject, updateProject,submitted, data}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [platformType, setPlatformType] = useState([]);
    const [users, setUsers] = useState([]);
    const [client, setClient] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    useEffect(() => {
        if (!submitted){
            setName('');
            setDescription('');
            setPlatformType([]);
            setUsers([]);
            setClient('');
            setStartDate('');
            setEndDate('');
            
        }
    }, [submitted]);

    useEffect(() => {
        if (data && data.name && data.name !==0 ){
            setName(data.name);
            setDescription(data.description || '');
            setPlatformType(data.platformType || []);
            setUsers(data.users || []);
            setClient(data.client || '');
            setStartDate(data.startDate || '');
            setEndDate(data.endDate || '');
        }
    }, [data]);

// a function to reset the form fields and mode
    const resetForm = () => {
        setName('');
        setDescription('');
        setPlatformType([]);
        setUsers([]);
        setClient('');
        setStartDate('');
        setEndDate('');
        setMode('add');
    }


  return (
    <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: 'white',
            marginBottom: '30px',
            display: 'block'
        }}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{color:'black',fontSize:'30px'}}>Projects</Typography> 
        </Grid>


        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography
                component={'label'}
                htmlFor='id'
                sx={{
                    color:'black',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block'
                }}
            >Project Title</Typography>
            <Input
                type='text'
                id='name'
                name='name'
                sx={{with:'400px'}}
                value={name}
                onChange={e => setName(e.target.value)}/>
        </Grid>

        {/* Description Input Field */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='description'
                sx={{
                    color: 'black',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
                >
                Description
            </Typography>
            <Input
                type='text'
                id='description'
                name='description'
                sx={{ width: '400px' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={100} // Set the maximum character length
             />
            <Typography
                variant='caption'
                sx={{ color: description.length > 100 ? 'red' : 'black' }}
                >
                {description.length}/100
            </Typography>
        </Grid>




        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='platformType'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
            }}
            >
            Platform Type
            </Typography>
            <FormControl sx={{ width: '400px' }}>
                <InputLabel id='platformType-label'>Select Platform Type</InputLabel>
                <Select
                    labelId='platformType-label'
                    id='platformType'
                    multiple
                    value={platformType}
                    onChange={(e) => setPlatformType(e.target.value)}
                    renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                        <Chip key={value} label={value} />
                        ))}
                    </div>
                    )}
                >
                    <MenuItem value='IOS'>IOS</MenuItem>
                    <MenuItem value='Android'>Android</MenuItem>
                    <MenuItem value='Web'>Web</MenuItem>
                    <MenuItem value='API'>API</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='users'
                sx={{
                    color: 'black',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block'
                }}
                >
                Users
            </Typography>
            <FormControl sx={{ width: '400px' }}>
            <InputLabel id='users-label'>Select Users</InputLabel>
                <Select
                    labelId='users-label'
                    id='users'
                    multiple
                    value={users}
                    onChange={(e) => setUsers(e.target.value)}
                    renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                        <Chip key={value} label={value} />
                        ))}
                    </div>
                    )}
                >
                {/* Replace with actual user options */}
                <MenuItem value='User1'>User1</MenuItem>
                <MenuItem value='User2'>User2</MenuItem>
                <MenuItem value='User3'>User3</MenuItem>
            </Select>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='client'
                sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
                }}
            >
                Client
            </Typography>
            <Input
                type='text'
                id='client'
                name='client'
                sx={{ width: '400px' }}
                value={client}
                onChange={(e) => setClient(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='startDate'
                sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
                }}
            >
                Start Date
            </Typography>
            <Input
                type='date'
                id='startDate'
                name='startDate'
                sx={{ width: '400px' }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='endDate'
                sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block'
                }}
            >
                End Date
            </Typography>
            <Input
                type='date'
                id='endDate'
                name='endDate'
                sx={{ width: '400px' }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </Grid>
        

        <Button
            sx={{
                margin:'auto',
                marginBottom:'20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '15px',
                marginTop:'20px',
                '&:hover':{
                    opacity:'0.7',
                    backgroundColor:'#00c6e6'
                }
            }}

            onClick={() => {
                if (mode === 'edit') {                  // if (isEdit)
                    updateProject({ 
                        name: name,
                        description,
                        platformType, 
                        users, 
                        client, 
                        startDate, 
                        endDate 
                    });
                    resetForm(); // reset the form after updating the user
                    
                } else {
                    addProject({ 
                        name: name,
                        description,
                        platformType, 
                        users, 
                        client, 
                        startDate, 
                        endDate  
                    });
                }
            }}   /* if equal key identifier = value identifier only need key or value {id, name}*/

        > 
            {
                //isEdit ? 'Update' :'Add'
                mode === 'edit' ? 'Update' :'Add' // render the button text based on the mode
                
            } 
        </Button>

    </Grid>
)}

export default ProjectForm


