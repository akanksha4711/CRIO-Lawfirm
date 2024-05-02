import { Stack } from "@mui/material"
import { Grid } from "@mui/material"
import imgData from "../../assets/Section1.json"
import "./Section1.css"

export default function Section1 () {
    return (
        <Stack spacing={5} className="section1" alignItems={"center"}>
            <span className="section1-heading">Area of Practices</span>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img1} alt="image1"/>
                    <span className="section1-text">BUSINESS LAW</span>
                </Grid>
                <Grid item xs={12} md={4} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img2} alt="image1"/>
                    <span className="section1-text">Partnership LAW</span>
                </Grid>
                <Grid item xs={12} md={4} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img3} alt="image1"/>
                    <span className="section1-text">REAL ESTATE LAW</span>
                </Grid>
                <Grid item xs={12} md={8} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img4} alt="image1"/>
                    <span className="section1-text">BUSINESS LAW</span>
                </Grid>
                <Grid item xs={12} md={8} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img5} alt="image1"/>
                    <span className="section1-text">LANDLORD DISPUTES</span>
                </Grid>
                <Grid item xs={12} md={4} sx={{"position":'relative'}}>
                    <img className="section1-img" src={imgData.img6} alt="image1"/>
                    <span className="section1-text">ELDER ABUSE</span>
                </Grid>
            </Grid>
        </Stack>
    )
}