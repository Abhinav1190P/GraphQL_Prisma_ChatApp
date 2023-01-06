import React, { useState, useRef } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
function Authscreen() {

    const [showlogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({})
    const authForm = useRef(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <Box
        ref={authForm}
            component={'form'}
            onSubmit={HandleSubmit}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            height="80vh"
        >
            <Stack
                direction={'column'}
                spacing={2}
                sx={{ width: '480px' }}
            >
                <Typography variant='h5'>Please {showlogin ? "Login" : "SignUp"}</Typography>

                {
                    !showlogin && <> <TextField
                        name="firstname"
                        label="First Name"
                        variant="standard"
                        onChange={handleChange}
                    />


                        <TextField
                            name="lastname"
                            label="Last Name"
                            variant="standard"
                            onChange={handleChange}
                        />
                    </>
                }

                <TextField
                    type="email"
                    name="email"
                    label="email"
                    variant="standard"
                    onChange={handleChange}
                />



                <TextField
                    type="password"
                    name="password"
                    label="password"
                    variant="standard"
                    onChange={handleChange}
                />
                <Typography variant="subtitle1"
                onClick={()=>{setShowLogin((preValue)=>!preValue)
                setFormData({})
                authForm.current.reset()
                }}
                >{showlogin ? "SignUp" : "Login"}</Typography>
                <Button variant='outlined' type="submit">{showlogin ? "Login" : "SignUp"}</Button>
            </Stack>
        </Box>
    )
}

export default Authscreen
