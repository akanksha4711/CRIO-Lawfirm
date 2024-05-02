import { FaGift } from "react-icons/fa6";
import "./SliderCard.css"

export default function SliderCard ({even}) {
    return (
        <div className={even ? "card even" : "card"}>
            <div className="card-content">
                <div>
                    <img className="icon-bg" src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BNc5IqjEyx0G~BEM~~wHTl5opG-uvcchLGKYRV~d2RmbA9vqpdUv2viS0GSOltMtsxjbuKAMIKf7Ggc3Hk7xHc0dSA~MQ7k3nOj36ZudVO2EgphkNXIv7HvwGfKvxdEIG8mxZnOlH5t8cGP~ikkj9UpUcyNZ4d6-WJGsI-eG~3xJEi7fbVw07MYc4VNv4Y1VdkI87RGVOPyBSNisMnNeqGOANZ1Fu8Mz8Cg1eMDbwkepCzyP6j~QlCG4xsWEiY3kbIlCx6JGsPajTkEfXXqb8DpHq8~vI-6NwHao-1-OyhUWt535Pq4rY0KVHAZH-TM3-zp92vwFyzJIfLOoWUA~tw__" alt="img"/>
                </div>
                <h3>
                    Jane Cooper
                </h3>
                <h5>CEO of Hunt</h5>
                <p className="card-p">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
            </div>
        </div>
    )
}