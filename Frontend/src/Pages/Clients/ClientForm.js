import { Grid, Typography, Button, Input,  } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ClientForm = ({addClient, updateClient,submitted, data}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [country, setCountry] = useState('');
    const [sampleLinks, setSampleLinks] = useState('');
    const [sampleImages, setSampleImages] = useState('');
    const [other, setOther] = useState('');
    const [mode, setMode] = useState('add') // a state variable to store the current mode of the form


    useEffect(() => {
        if (!submitted){
            setName('');
            setDescription('');
            setProfileImage('');
            setCountry('');
            setSampleLinks('');
            setSampleImages('');
            setOther('');
            
        }
    }, [submitted]);

    useEffect(() => {
        if (data && data.name && data.name !==0 ){
            setName(data.name);
            setDescription(data.description || '');
            setProfileImage(data.profileImage || '');
            setCountry(data.country || '');
            setSampleLinks(data.sampleLinks || '');
            setSampleImages(data.sampleImages || '');
            setOther(data.other || '');
            setMode('edit');  // set the mode to edit when data is passed as prop
        }
    }, [data]);

// a function to reset the form fields and mode
    const resetForm = () => {
        setName('');
        setDescription('');
        setProfileImage('');
        setCountry('');
        setSampleLinks('');
        setSampleImages('');
        setOther('');
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
            <Typography component={'h1'} sx={{color:'black',fontSize:'30px'}}>Clients</Typography> 
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
            >Client Name</Typography>
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

        {/* Profile Image Input */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='profileImage'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
            >
            Profile Image
            </Typography>
            <Input
                type='file'
                id='profileImage'
                name='profileImage'
                sx={{ width: '400px' }}
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
            />
        </Grid>
            
            
        {/* Country Input */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='country'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
            >
            Country
            </Typography>
            <Input
                type='text'
                id='country'
                name='country'
                sx={{ width: '400px' }}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
        </Grid>

        {/* Sample Links Input */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='sampleLinks'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
            >
            Sample Links
            </Typography>
            <Input
                type='text'
                id='sampleLinks'
                name='sampleLinks'
                sx={{ width: '400px' }}
                value={sampleLinks}
                onChange={(e) => setSampleLinks(e.target.value)}
            />
        </Grid>

        {/* Sample Images Input */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='sampleImages'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
            >
            Sample Images
            </Typography>
            <Input
                type='file'
                id='sampleImages'
                name='sampleImages'
                sx={{ width: '400px' }}
                value={sampleImages}
                onChange={(e) => setSampleImages(e.target.value)}
            />
        </Grid>

        {/* Other Input */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography
            component={'label'}
            htmlFor='other'
            sx={{
                color: 'black',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
            >
            Other
            </Typography>
            <Input
                type='text'
                id='other'
                name='other'
                sx={{ width: '400px' }}
                value={other}
                onChange={(e) => setOther(e.target.value)}
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
                    updateClient({ 
                        name: name,
                        description,
                        profileImage,
                        country,
                        sampleLinks,
                        sampleImages,
                        other, 
                    });
                    resetForm(); // reset the form after updating the user
                    
                } else {
                    addClient({ 
                        name: name,
                        description,
                        profileImage,
                        country,
                        sampleLinks,
                        sampleImages,
                        other, 
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

export default ClientForm
