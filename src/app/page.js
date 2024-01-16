'use client'
import Footer from "@/Components/Footer/Footer";
import Homepage from "@/Components/Homepage/Homepage";
import Navbar from "@/Components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import theme from './theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Homepage/>
    <Footer/>
    </ThemeProvider>
    
  )
}
