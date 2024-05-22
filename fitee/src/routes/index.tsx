import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { useAuth } from "lib/auth";

export const AppRoutes = () => {
  const auth = useAuth();
  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
