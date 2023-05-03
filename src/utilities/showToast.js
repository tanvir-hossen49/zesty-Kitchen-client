import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (type, message) => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
