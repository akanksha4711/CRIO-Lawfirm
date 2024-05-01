import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import Section1 from "../components/Section1/Section1";
import { Stack } from "@mui/material";
import "./Home.css";

export default function Home () {
    return (
        <div>
            <Stack sx={{"backgroundColor" : "#111111"}}>
                <div className="container">
                    <Navbar />
                    <Hero />
                </div>
            </Stack>
            <Stack>
                <Stack spacing={18} className="container">
                    <Introduction />
                    <Section1/>
                </Stack>
            </Stack>
        </div>
    )
}