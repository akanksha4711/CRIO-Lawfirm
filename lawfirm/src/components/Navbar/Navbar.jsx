import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as LogoText } from "../../assets/logo-text.svg"
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Navbar.css";

export default function Navbar ({footer}) {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Logo/>
                <LogoText/>
            </Stack>
            <Stack direction={"row"} spacing={6}>
                <span className="nav-item">Home</span>
                <span className="nav-item">Attorneys</span>
                <span className="nav-item">Practice Areas</span>
                <span className="nav-item">About Us</span>
            </Stack>
            {footer ? <Stack direction={"row"} spacing={2}>
                <InstagramIcon fontSize="large" sx={{"color" : "#E3B748"}}/>
                <FacebookIcon fontSize="large" sx={{"color" : "#E3B748"}}/>
                <TwitterIcon fontSize="large" sx={{"color" : "#E3B748"}}/>
                <PinterestIcon fontSize="large" sx={{"color" : "#E3B748"}}/>
            </Stack> : 
            <Button className="btn" variant="outlined">Contact Now</Button>}
        </Stack>
    )
}