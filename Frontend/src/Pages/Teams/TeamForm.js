import { Grid, Typography, Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TeamForm = ({addTeam, updateTeam,submitted, data,mode,setMode,setModalIsOpen}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
     


    useEffect(() => {
        if (!submitted){
            setName('');
            setDescription('');
            
        }
    }, [submitted]);

    useEffect(() => {
        if (data && data.name && data.name !==0 ){
            setName(data.name);
            setDescription(data.description || '');
        }
    }, [data]);

// a function to reset the form fields and mode
    const resetForm = () => {
        setName('');
        setDescription('');
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
            <Typography component={'h1'} sx={{color:'black',fontSize:'30px'}}>Teams</Typography> 
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
            >Team Name</Typography>
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
                    updateTeam({ 
                        name: name, 
                        description: description 
                    });

                    resetForm(); // reset the form after updating the user
                    
                } else {
                    addTeam({ 
                        name: name, 
                        description: description 
                    });
                }
                setTimeout(() => {
                    setModalIsOpen(false)
                }, 500);
            }}   /* if equal key identifier = value identifier only need key or value {id, name}*/

        > 
            {
                //isEdit ? 'Update' :'Add'
                mode === 'edit' ? 'Update' :'Add' // render the button text based on the mode
                
            } 
            
        </Button>

    </Grid>
)}

export default TeamForm
