import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}
                sx={{
                    // height: '100v',
                    border: '2px solid red'
                }}
            >
                <Grid item xs={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor: 'yellow',
                    }}
                >
                    <Typography variant='h6' color={'blue'}
                        sx={{
                            textAlign: 'center',
                            width: '100%',
                            borderBottom: '1px solid black',
                            padding: '5px'
                        }}
                    >
                        DASHBOARD
                    </Typography>
                </Grid>
                
                <Grid item xs={10}>
                    <Box>hhh</Box>
                </Grid>
            </Grid>
        </Box>
    );
}
