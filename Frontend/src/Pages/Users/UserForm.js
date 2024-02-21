import { Grid, Typography, Button, Input, Select, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UserForm = ({addUser, updateUser,submitted, data, isEdit}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState(null);
    const [team, setTeam] = useState('');
    const [mode, setMode] = useState('add') // a state variable to store the current mode of the form


//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//     name: '',
//     employeeNo: '',
//     team: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value
//         });
//       };


    useEffect(() => {
        if (!submitted){
            setId('');
            setName('');
            setImage(null);
            setTeam('');
            
        }
    }, [submitted]);

    useEffect(() => {
        if (data && data.id && data.id !==0 ){
            setId(data.id);
            setName(data.name);
            setImage(null);
            setTeam(data.team || '');
            setMode('edit');  // set the mode to edit when data is passed as prop
        }
    }, [data]);

// a function to reset the form fields and mode
    const resetForm = () => {
        setId('');
        setName('');
        setTeam('');
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
            <Typography component={'h1'} sx={{color:'black',fontSize:'30px'}}>Users</Typography> 
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
            >Emp No</Typography>
            <Input
                type='number'
                id='id'
                name='id'
                sx={{with:'400px'}}
                value={id}
                onChange={e => setId(e.target.value)}/>
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
            >Name</Typography>
            <Input
                type='text'
                id='name'
                name='name'
                sx={{with:'400px'}}
                value={name}
                onChange={e => setName(e.target.value)}/>
        </Grid>

        {/* Input field for image */}
        <Grid item xs={12} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='image'
            sx={{ 
                color: 'black', 
                marginRight: '20px', 
                fontSize: '16px', 
                width: '100px', 
                display: 'block' 
            }}
            >
            Image
            </Typography>
            <Input
                type='file'
                id='image'
                name='image'
                onChange={(e) => setImage(e.target.files[0])} // Handle image selection

            />
        </Grid>

        {/* Input field for team */}
        <Grid item xs={12} sx={{ display: 'flex' }}>
            <Typography
                component={'label'}
                htmlFor='team'
                sx={{ color: 'black', marginRight: '20px', fontSize: '16px', width: '100px', display: 'block' }}
            >
            Team
            </Typography>
            <Select
                id='team'
                name='team'
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                sx={{ with: '400px' }}
                >
                <MenuItem value=''>Select Team</MenuItem>
                <MenuItem value='IOS'>IOS</MenuItem>
                <MenuItem value='Android'>Android</MenuItem>
                <MenuItem value='Web'>Web</MenuItem>
                <MenuItem value='API'>API</MenuItem>
            </Select>
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
                    updateUser({ 
                        id: id, name: name, 
                        image: image, 
                        team: team
                    });

                    resetForm(); // reset the form after updating the user
                    
                } else {
                    addUser({ 
                        id: id, 
                        name: name, 
                        image: image, 
                        team: team
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

export default UserForm
