import { ToastContainer } from "react-toastify"
import AllRoutes from "./routes/AllRoutes"
import 'react-toastify/dist/ReactToastify.css';
import { MouseProvider } from "./context/mouseContext";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
    return (
        <>
            <Analytics />
            <ToastContainer />
            <MouseProvider>
                <AllRoutes />
            </MouseProvider>

        </>
    )
}
