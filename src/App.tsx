import { ToastContainer } from "react-toastify"
import AllRoutes from "./routes/AllRoutes"
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
        <ToastContainer />
        <AllRoutes />
    </>
  )
}
