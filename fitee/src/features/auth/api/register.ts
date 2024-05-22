import axios from "axios";
import { handleError } from "utils/ErrorHandler";

export type RegisterCredentialsDTO = {
  email: string;
  userName: string;
  password: string;
};

const api = "http://localhost:5015/api";

export const registerAPI = async (registerData: RegisterCredentialsDTO) => {
  try {
    const data = await axios.post<RegisterCredentialsDTO>(
      api + "account/register",
      {
        email: registerData.email,
        username: registerData.userName,
        password: registerData.password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
