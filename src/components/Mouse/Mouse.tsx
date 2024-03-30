import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion"
import { useMouseContext } from "../../context/mouseContext";

export const Mouse = ({ 
    refMouse 
}: any) => {
    const {cursorVariants} = useMouseContext();

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
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: 50,
            width: 50,
            fontSize: "18px",
            x: mouseXPosition - 22,
            y: mouseYPosition - 22,
            transition: {
                opacity: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                height: { duration: 0.2 },
                width: { duration: 0.2 },
                fontSize: { duration: 0.2 },
                x: { type: "tween", duration: 0 },
                y: { type: "tween", duration: 0 }
              }
        },
        contact: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: 20,
            width: 20,
            fontSize: "18px",
            x: mouseXPosition - 12,
            y: mouseYPosition - 12,
            transition: {
                backgroundColor: { duration: 0.2 },
                height: { duration: 0.2 },
                width: { duration: 0.2 },
                fontSize: { duration: 0.2 },
                x: { type: "tween", duration: 0.1 },
                y: { type: "tween", duration: 0.1 },
              }
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

    // function contactLeave() {
    //     setCursorText("");
    //     setCursorVariant("default");
    // }

    return (
        <> {window.innerWidth < 768
            ? <></>
            :
            <motion.div variants={variants}
                className="circle"
                animate={cursorVariants}>
                <span className='cursorText'></span>
            </motion.div>
        }
        </>
    )
}