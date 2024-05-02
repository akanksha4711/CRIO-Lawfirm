import { Stack } from "@mui/material";
import "./Subscribe.css";

export default function Subscribe () {
    return (
        <Stack className="subscribe" spacing={8}>
            <h1>Subscribe Our Newsletter</h1>
            <form>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <input placeholder="Name" className="subscribe-input one"/>
                    <input placeholder="Email" className="subscribe-input"/>
                    <button className="subscribe-btn" type="submit">SEND</button>
                </Stack>
            </form>
        </Stack>
    )
}