import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as LogoText } from "../../assets/logo-text.svg"
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "./Navbar.css";

export default function Navbar () {
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
            <Button className="btn" variant="outlined">Contact Now</Button>
        </Stack>
    )
}