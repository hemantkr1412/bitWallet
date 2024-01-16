'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Features.css'
import { Element } from 'react-scroll';
import { FaUnlockAlt, FaHandHoldingUsd } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

const cardData = [
    {
        imageSrc: <FaUnlockAlt className='imgStyle' />,
        title: 'Data Protection',
        },
    {
        imageSrc: <FaHandHoldingUsd className='imgStyle' />,
        title: 'Robust Infrastructure',
        },
    {
        imageSrc: <RiNodeTree className='imgStyle' />,
        title: 'Decentralized',
},
    {
        imageSrc: <AiOutlineSafetyCertificate className='imgStyle' />,
        title: 'Verified and secure to use',
        },
    {
        imageSrc: <SiHiveBlockchain className='imgStyle' />,
        title: ' Easy to Use ',
        },
    {
        imageSrc: <HiClipboardDocumentCheck className='imgStyle' />,
        title: 'Support Assets',
        },
];

const Features = () => {
    return (
        <Element name='features'>
        <div className='box'>
            <Typography variant="h4" sx={{ textAlign: 'center',marginTop:'4%',fontWeight:'bold' }}>Why choose BitWallet?</Typography>
            <Typography
                variant="body1"
                sx={{
                    width: '40%',
                    margin: 'auto',
                    textAlign: 'center',
                    mt: 3, mb: 5
                }}>A more secure and transparent wallet</Typography>

            <Box className='allcards'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        sx={{ py: 0, textAlign: 'center' ,  backgroundColor: index % 2 === 0 ? 'var(--bluishbg)' : 'white',}}
                        className='card shadow-xl shadow-gray-800'
                    >
                        {card.imageSrc}
                        <CardContent>
                            <Typography className='cardTitle' gutterBottom variant="h5" component="Box">
                                {card.title}
                            </Typography>                 
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
        </Element>
    );
}

export default Features;
