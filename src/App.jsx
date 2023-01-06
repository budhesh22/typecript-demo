import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import PageRoute from "./routes/PageRoute";

const App = () => {
  return (
    <>
      <PageRoute />
      <ToastContainer />
    </>
  );
};

export default App;
