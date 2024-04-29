import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
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
        </div>
    )
}