import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        bgcolor: 'black',
                    }}
                >
                    <img src="https://static.wixstatic.com/media/a065f2_8066744694014295adf44b9ae12883d6~mv2.png/v1/fill/w_176,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bit%20logo%20.png" alt="LOGO" />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                margin: '0 20px',
                            }}
                        >
                            User
                        </Typography>
                        <Button 
                            sx={{
                                margin: '0 20px',
                                bgcolor: 'yellow',
                                height: '40px',
                                width: '100px',
                                "&:hover": {
                                    bgcolor: '#dbff00'
                                },
                            }}
                        >
                            LOGOUT
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
