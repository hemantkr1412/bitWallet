'use client'
import { Typography } from "@mui/material";
import './Homepage.css'
import { Slide } from "react-reveal";
import Information from "../Information/Information";
import Youtube from 'react-youtube'
import Features from "../Features/Features";
import Download from "../Download/Download";

const Homepage = () => {
    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=YDsqedqmF84';
    const videoId = youtubeVideoUrl.split('v=')[1];


    return (
        <>

            <div className="vision">
                <Slide left>
                    <div className="vision-text">
                        <Typography sx={{ fontWeight: 'bold' }} variant="h3">A crypto wallet & <br /> gateway to <br /> blockchain World</Typography>
                        <Typography sx={{ marginTop: '3%', fontSize: '1.1rem' }}> Enhance your user experience with BitWallet, the key to blockchain world</Typography>
                        <button>Download</button>
                    </div>
                </Slide>
                <div className="image">
                    <img src="/assets/main.png"></img>

                </div>
            </div>
            <Information />
            <h1 className="yt-title">What is Bit Wallet</h1>
            <div className="youtube">
                <Youtube videoId={videoId} />
            </div>
            <Features />
            <Download />
        </>
    )
}
export default Homepage;