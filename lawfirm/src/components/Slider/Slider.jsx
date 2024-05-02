import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import "./Slider.css";
import { Grid, Stack } from "@mui/material";
import SliderCard from "../SliderCard/SliderCard";

const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
})

export default function Slider () {
    return (
        <Stack className="slider" spacing={6}>
            <Stack>
                <h1>What says our happy Clients</h1>
            </Stack>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Grid container>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard even/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                        </Grid>
                    </div>
                    <div className="swiper-slide">
                        <Grid container>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard even/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                        </Grid>
                    </div>
                    <div className="swiper-slide">
                        <Grid container>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard even/></Grid>
                            <Grid className="grid-item" item xs={4}><SliderCard/></Grid>
                        </Grid>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </Stack>
    )
}