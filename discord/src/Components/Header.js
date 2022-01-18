import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import right from './right.svg'
import left from './left.svg'
export const Header = () => {
  

    return (
        <div>
            <Grid container className='img'  sx={{ height: '500px', backgroundColor: "#404EED" }} >
                <Grid item className='left'  xs={12} sm={6} md = {4}>
                    <img src={left} alt = "left"></img>
                </Grid>
                <Grid item md={4} xs={12} sm={6}  sx={{ color: "white" }}>
                    <Typography variant='h1' sx={{ fontfamily: "Helvetica", fontWeight: "bold" }}>Imagine A Place...</Typography>
                    <Typography variant='p'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</Typography>
                    <div className='bwrap'>
                        <Button variant='contained' sx = {{margin: "10px", fontSize : "small", padding: "10px 20px", boxShadow: "none", borderRadius: "2rem", backgroundColor: "white", color:"black", fontWeight: "560"}}>Download for Windows</Button>
                        <Button variant='contained' sx = {{margin: "10px", fontSize : "small", padding: "10px 20px", boxShadow: "none", borderRadius: "2rem",backgroundColor: "rgb(27, 27, 27)", color:"white", fontWeight: "550"}}>Open Discord in your browser</Button>
                    </div>
                </Grid>
                <Grid item className='right' md={4} xs={12} sm={6} b>
                   <img src={right} alt = "right"></img>

                </Grid>
            </Grid>
        

        </div>
    )
}
