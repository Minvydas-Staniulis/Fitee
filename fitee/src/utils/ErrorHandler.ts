import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    var err = error.response;
    switch (true) {
      case Array.isArray(err?.data.errors):
        for (let val of err?.data.errors) {
          toast.warning(val.description);
        }
        break;
      case typeof err?.data.errors === "object":
        for (let e in err?.data.errors) {
          toast.warning(err?.data.errors[e][0]);
        }
        break;
      case err?.data:
        toast.warning(err?.data);
        break;
      case err?.status === 401:
        toast.warning("You are not logged in");
        window.history.pushState({}, "LoginPage", "/login");
        break;
      default:
        toast.warning(err?.data);
        break;
    }
  }
};
