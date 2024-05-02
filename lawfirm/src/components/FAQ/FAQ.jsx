import { Grid } from "@mui/material";
import {Accordion} from "@mui/material";
import {AccordionSummary} from "@mui/material";
import {AccordionDetails} from "@mui/material";
import {Typography} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import "./FAQ.css";

export default function FAQ () {
    return (
        <div className="faq">
            <h1>FAQ</h1>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <p><Typography className="accordion-details">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Typography></p>
                </Grid>
                <Grid item xs={6}>
                    <Accordion defaultExpanded className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreRounded className="expand-icon"/>}
                            aria-controls="panel1-content"
                            id="panel1-content"
                        >
                            <Typography className="accordion-heading">Do I need a personal injury report?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="accordion-details">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreRounded className="expand-icon"/>}
                            aria-controls="panel1-content"
                            id="panel1-content"
                        >
                            <Typography className="accordion-heading">How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="accordion-details">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreRounded className="expand-icon"/>}
                            aria-controls="panel1-content"
                            id="panel1-content"
                        >
                            <Typography className="accordion-heading">What should I do right after car accident?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="accordion-details">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreRounded className="expand-icon"/>}
                            aria-controls="panel1-content"
                            id="panel1-content"
                        >
                            <Typography className="accordion-heading">How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="accordion-details">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </div>
    )
}