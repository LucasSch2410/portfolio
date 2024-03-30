import { ToastContainer } from "react-toastify"
import AllRoutes from "./routes/AllRoutes"
import 'react-toastify/dist/ReactToastify.css';
import { MouseProvider } from "./context/mouseContext";

export default function App() {
    return (
        <>
            <ToastContainer />
            <MouseProvider>
                <AllRoutes />
            </MouseProvider>

        </>
    )
}
