import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import Section1 from "../components/Section1/Section1";
import Slider from "../components/Slider/Slider";
import { Grid, Stack } from "@mui/material";
import teamData from "../assets/Team.json";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";
import "./Home.css";

export default function Home () {
    return (
        <Stack spacing={10}>
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
                    <Slider/>
                    <Stack alignItems={"center"} spacing={8}>
                        <h1 className="team-heading">Our Team</h1>
                        <Grid container spacing={10}>
                            {teamData.data.map((mem,idx) => <Grid className="grid-item" item xs={4} key={idx}><Team name={mem.name} cases={mem.cases} image={mem.image}/></Grid>)}
                        </Grid>
                    </Stack>
                    <FAQ/>
                    <Subscribe/>
                </Stack>
            </Stack>
            <Stack sx={{"backgroundColor" : "#111111"}}>
                <div className="container">
                    <Footer/>
                </div>
            </Stack>
        </Stack>
    )
}