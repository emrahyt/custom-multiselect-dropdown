import { useEffect } from "react";

import { StyledToastContainer } from "./toast.styles";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    const hideToast = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(hideToast);
  }, [onClose]);

  return <StyledToastContainer $show={show}>{message}</StyledToastContainer>;
};

export default Toast;
