import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion"
// import { useState } from "react";

export function Mouse({refMouse}:any) {
    // const [cursorText, setCursorText] = useState("");
    // const [cursorVariant, setCursorVariant] = useState("project");

    const mouse = useMouse(refMouse, {
        fps: 165
    });

    let mouseXPosition = -100;
    let mouseYPosition = -100;

    if (mouse.clientX !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.clientY !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 0,
        },
        project: {
            opacity: 1,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "#fff",
            color: "#000",
            height: 50,
            width: 50,
            fontSize: "18px",
            x: mouseXPosition - 22,
            y: mouseYPosition - 22,
            transition: {
                type:"tween",
                duration: 0
            }
        },
        contact: {
            opacity: 1,
            backgroundColor: "#FFBCBC",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition,
            y: mouseYPosition
        }
    };

    // function projectEnter() {
    //     setCursorText("");
    //     setCursorVariant("project");
    // }

    // function projectLeave() {
    //     setCursorText("");
    //     setCursorVariant("default");
    // }

    // function contactEnter() {
    //     setCursorText("👋");
    //     setCursorVariant("contact");
    // }

    // function contactLeave() {
    //     setCursorText("");
    //     setCursorVariant("default");
    // }

    return (
        <motion.div variants={variants}
            className="circle"
            animate={"project"}>
            <span className='cursorText'></span>
        </motion.div>
    )
}