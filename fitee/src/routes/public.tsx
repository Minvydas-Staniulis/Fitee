import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Workouts from "../features/workouts/routes/Workouts";
import { MainLayout } from "../components/Layout/MainLayout";
import Statistics from "../features/statistics/routes/Statistics";
import { Home } from "../features/home/routes/Home";
import {
  foodieImage,
  runningImage,
  weightLiftingMeditationImage,
} from "../assets/images";
import { Nutrition } from "../features/nutrition/routes/Nutrition";

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
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home backgroundImage={weightLiftingMeditationImage} />,
      },
      {
        path: "workouts",
        element: <Workouts backgroundImage={runningImage} />,
      },
      { path: "statistics", element: <Statistics /> },
      {
        path: "Nutrition",
        element: <Nutrition backgroundImage={foodieImage} />,
      },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
  { path: "/", element: <Navigate to="/app" /> },
];
