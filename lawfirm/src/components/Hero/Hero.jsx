import { Stack } from "@mui/material";
import "./Hero.css";

export default function Hero () {
    return (
        <div className="hero">
            <Stack direction={"row"}>
                <Stack spacing={4} className="text-grp">
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
                <Stack className="img-grp">
                    <div className="background"></div>
                    <img className="hero-img" src="https://s3-alpha-sig.figma.com/img/5297/d3a8/2fa6ad1244fd2171cc3723b4853a0c45?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VlU9L7v~juVh8fWGgnmyNWe5NvFud1ta2f9Wo-7C9xtXrZSj6c6Y~2ljdA9hh8fZzLOs7X7JPvIfaEyDlZ5QmDz6IMFC1HbKthCLL1GBuGkqVBdC-dslnnxzsCJSmhMH70z1895geHKkJ1B71clecObjJMhIdqJEZpHSpAblJx2jXn10gcfyoLEy3puZ3t1s6lt6WZbFnWzzqN~3PAcd42iGUMG6rU4hWgxuSX8ws88XqwFzXLyXA0w36jytPIm8S9nMCUpcieL249n~S4lbR-GuttpMtZWM-6DnGSfExxA9ceRsKExXoAFY0iR7~2gRIyygtzw5LvXMyasNKUDZUw__" alt="Hero_Image"/>
                </Stack>
            </Stack>
        </div>
    )
}