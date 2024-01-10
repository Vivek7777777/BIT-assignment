import { Grid, Typography, Box } from "@mui/material";
import PieChart from "./Piechart";

export default function GraphBox({ topic, text1, minPrice, maxPrice, avgPrice, lessFif, aboveFif, aboveHun }) {
    return (
        <>
            <Grid container
                sx={{
                    marginTop: '20px'
                }}
            >
                <Grid item md={12}>
                    <Typography variant="h5"
                        sx={{
                            margin: '10px',
                        }}
                    >
                        {topic}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        borderRadius: '20px',
                    }}
                >
                    {text1 === 'Price' ? 
                    <PieChart
                    text1={['100+', '50+', '<50']}
                    lessFif={lessFif}
                    aboveFif={aboveFif}
                    aboveHun={aboveHun}
                    /> 
                    : 
                    <PieChart
                    text1={['4+', '3+', '<3']}
                    lessFif={lessFif}
                    aboveFif={aboveFif}
                    aboveHun={aboveHun}
                    /> 
                }
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        borderRadius: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h6">Max {text1} = {Math.floor(maxPrice)}</Typography>
                        <Typography variant="h6">Avg {text1} = {Math.floor(avgPrice)}</Typography>
                        <Typography variant="h6">Min {text1} = {Math.floor(minPrice)}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}