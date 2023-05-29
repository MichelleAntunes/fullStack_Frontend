import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  return (
    <ToastContainer
      className={"pl-10 top-12 right-0 sm:pl-0"}
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
  );
}
