import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Card from "../Card/Card";
import "./Introduction.css";

export default function Introduction () {
    return (
        <div className="intro">
            <Stack spacing={12}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <h1 className="intro-item">Let's Introduce Ourself</h1>
                    <div className="divider"></div>
                    <Stack className="intro-item">
                        <h2 className="intro-subheading">Criminal Lawyer</h2>
                        <p className="intro-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack alignItems={"center"} spacing={8}>
                        <h1>Why Choose us?</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Card successRate={98}/></Grid>
                            <Grid item xs={4}><Card even successRate={100}/></Grid>
                            <Grid item xs={4}><Card successRate={100}/></Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}