import Navbar from "./Navbar"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from "axios";
import { useState, useEffect } from "react";
import GraphBox from "./GraphBox";


export default function Dashboard({user}) {

    const [minPrice, setMinPrice] = useState(1000),
        [maxPrice, setMaxPrice] = useState(0),
        [avgPrice, setAvgPrice] = useState(0),
        [aboveHun, setAboveHun] = useState(0),
        [aboveFif, setAboveFif] = useState(0),
        [lessFif, setLessFif] = useState(0);

    const [minRating, setMinRating] = useState(5),
        [maxRating, setMaxRating] = useState(0),
        [avgRating, setAvgRating] = useState(0),
        [aboveFour, setAboveFour] = useState(0),
        [aboveThree, setAboveThree] = useState(0),
        [lessThree, setLessThree] = useState(0);

    const isMobile = window.screen.width < 600

    async function getPrice() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const result = response.data;
            let aa = 1000, bb = 0, cc = 0, dd = 0, ee = 0, ff = 0, gg = 0;
            const promises = result.map(async (item) => {
                let p = item.price;

                if (p < aa) {
                    aa = p
                }
                if (p > bb) bb = p;

                dd += p;

                if (p > 100)
                    ee++;
                else if (p > 50)
                    ff++;
                else
                    gg++;

                return p;
            });
            await Promise.all(promises);
            setMinPrice(aa);
            setMaxPrice(bb)
            setAvgPrice(dd / result.length);
            setAboveHun(ee);
            setAboveFif(ff);
            setLessFif(gg);
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        }
    }



    async function getRating() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const result = response.data;

            let aa = 5, bb = 0, cc = 0, dd = 0, ee = 0, ff = 0, gg = 0;
            const promises = result.map(async (item) => {
                let p = item.rating.rate;

                if (p < aa) {
                    aa = p
                }
                if (p > bb) bb = p;

                dd += p;

                if (p > 4)
                    ee++;
                else if (p > 3)
                    ff++;
                else
                    gg++;

                return p;
            });
            await Promise.all(promises);
            
            setMinRating(aa);
            setMaxRating(bb)
            setAvgRating(dd / result.length);
            setAboveFour(ee);
            setAboveThree(ff);
            setLessThree(gg);


        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        }
    }





    useEffect(() => {
        getPrice()
        getRating()
    }, [])


    return (
        <>
            <Navbar user={user}/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item sm={3}  md={2} 
                        sx={{
                            display: isMobile ? 'none' : 'flex',
                            justifyContent: 'center',
                            bgcolor: 'yellow',
                        }}
                    >
                        <Typography variant='h6' color={'blue'}
                            sx={{
                                textAlign: 'center',
                                width: '100%',
                                borderBottom: '1px solid black',
                                padding: '5px',
                                flexShrink: '11',
                            }}
                        >
                            DASHBOARD
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9} md={10}>
                        <Box
                            sx={{
                                borderRadius: '20px',
                                margin: '50px',
                                flexGrow: '1',
                                bgcolor: '#e6e6e6'
                            }}
                        >



                            <GraphBox
                                topic= 'Sale Price'
                                text1= 'Price'
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                avgPrice={avgPrice}
                                lessFif={lessFif}
                                aboveFif={aboveFif}
                                aboveHun={aboveHun}
                                />
                            <GraphBox
                                topic= 'Customer Rating'
                                text1= 'Rating'
                                minPrice={minRating}
                                maxPrice={maxRating}
                                avgPrice={avgRating}
                                lessFif={lessThree}
                                aboveFif={aboveThree}
                                aboveHun={aboveFour}
                            />

                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}