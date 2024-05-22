import axios from "axios";
import { handleError } from "utils/ErrorHandler";

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

const api = "http://localhost:5015/api";

export const loginAPI = async (loginData: LoginCredentialsDTO) => {
  try {
    const data = await axios.post<LoginCredentialsDTO>(api + "account/login", {
      username: loginData.username,
      password: loginData.password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
