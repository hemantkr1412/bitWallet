'use client'

import { Grid, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<Grid container spacing={2} className="footerDiv">
				<Grid item xs={1}></Grid>
				<Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
					<Box sx={{ width: '20%' }}>
						<img
							src='https://static.wixstatic.com/media/a065f2_8066744694014295adf44b9ae12883d6~mv2.png/v1/fill/w_176,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bit%20logo%20.png'
							alt=""
							style={{ marginTop: ".5rem", }}
							id="footerImg"
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					md={4}
					lg={3}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
					id="footerIcons">
					<Box>
						<InstagramIcon
							sx={{
								transform: "scale(1.4)",
								cursor: "pointer",
								color: 'white'
							}}
						/>
						<TwitterIcon className="footerIcons" />
						<LinkedInIcon className="footerIcons" />
						<TelegramIcon className="footerIcons" />
					</Box>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<p className="copyrightText">© 2023 Beyond Imagination Technologies Pvt. Ltd.</p>
		</>
	);
};

export default Footer;
