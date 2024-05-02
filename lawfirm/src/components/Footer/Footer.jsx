import { Stack } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import "./Footer.css";

export default function Footer () {
    return (
        <Stack className="footer" spacing={10} mt={6} mb={6}>
            <Navbar footer/>
            <Stack direction={"row"} className="footer-details" spacing={10}>
                <span>&copy; 2020 Acme. All right reserved</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </Stack>
        </Stack>
    )
}