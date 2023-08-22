import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import { Box,Stack } from '@mui/material';

const Home = () => {
    const [musicData, setMusicData]= useState(null)
    useEffect(()=>{
        axios({
            url:'https://academics.newtonschool.co/api/v1/music/song',
            method:"get",
            headers:{
                projectId: "z5civ6ptecws"
            },
        }).then((res)=>console.log(res.data));
        

    })
    useEffect(()=>{
        axios({
            url:'https://academics.newtonschool.co/api/v1/music/album',
            method:"get",
            headers:{
                projectId: "z5civ6ptecws"
            },
        }).then((res)=>console.log(res.data));
        

    })
    
    return (
        <>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar/>
                </Box>
            </Stack>
        </>
    );
}

export default Home;