import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Nutrition } from "features/nutrition/routes/Nutrition";
import { Home } from "features/home/routes/Home";
import Statistics from "features/statistics/routes/Statistics";
import { MainLayout } from "components/Layout/MainLayout";
import Workouts from "features/workouts/routes/Workouts";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center"></div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "workouts",
        element: <Workouts />,
      },
      { path: "statistics", element: <Statistics /> },
      {
        path: "Nutrition",
        element: <Nutrition />,
      },
      { path: "*", element: <Navigate to="/app/home" /> },
    ],
  },
  { path: "/", element: <Navigate to="/app/home" /> },
];
