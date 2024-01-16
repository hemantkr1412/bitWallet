// Download.jsx
import React from 'react';
import { Element } from 'react-scroll';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { FaChrome } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import './Download.css';

const cardData = [
  {
    imageSrc: '/assets/qrcode.png',
    title: 'Download Chrome extension for desktop',
    icon: <FaChrome />
  },
  {
    imageSrc: '/assets/qrcode2.png',
    title: 'Download the Ios Application',
    icon: <FaApple />
  },
  {
    imageSrc: '/assets/qrcode.png',
    title: 'Download the Andriod Application',
    icon: <IoLogoAndroid />
  },
];

const Download = () => {
  return (
    <Element name="download-section">
      <div className='download-box'>
        <Typography variant="h4" sx={{ textAlign: 'center', marginTop: '4%', fontWeight: 'bold' }}>BitWallet Download</Typography>
        <Typography
          variant="body1"
          sx={{
            width: '40%',
            margin: 'auto',
            textAlign: 'center',
            mt: 3, mb: 5
          }}>A more secure and transparent wallet</Typography>

        <Box className='allqrcards'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              sx={{ py: 0, textAlign: 'center' }}
              className='qrcard shadow-xl shadow-gray-800'
            >
              <img src={card.imageSrc} alt={`QR Code ${index + 1}`} />
              <CardContent>
                <Typography className='qrcardTitle' gutterBottom variant="h5" component="Box">
                  {card.title}
                </Typography>
                <button> Download {card.icon}</button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </Element>
  );
}

export default Download;
