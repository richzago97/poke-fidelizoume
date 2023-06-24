import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesMain from "./routes";

function App() {
   return (
      <div className="App">
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
         <RoutesMain />
      </div>
   );
}

export default App;
