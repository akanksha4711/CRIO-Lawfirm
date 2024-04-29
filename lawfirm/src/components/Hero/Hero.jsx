import { Stack } from "@mui/material";
import "./Hero.css";

export default function Hero () {
    return (
        <div className="hero">
            <Stack>
                <Stack>
                    <Stack className="hero-heading">
                        <span>You don't have to</span>
                        <span style={{"fontWeight": "700"}}>Fight them Alone.</span>
                    </Stack>
                    <Stack className="hero-subheading">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                    </Stack>
                    <form>
                        <input placeholder="Enter your email address"></input>
                        <button type="submit">Let's Talk</button>
                    </form>
                </Stack>
            </Stack>
        </div>
    )
}