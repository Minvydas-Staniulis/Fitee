import { Card, CardContent } from "@mui/material";
import { FirstCard } from "../components/FirstCard";
import { SecondCard } from "../components/SecondCard";
import { ThirdCard } from "../components/ThirdCard";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex gap-2 items-center justify-center pt-10">
        <div
          className="flex justify-center"
          style={{ width: "30%", height: "100%" }}
        >
          <FirstCard />
        </div>
        <div
          className="flex justify-center"
          style={{ width: "30%", height: "100%" }}
        >
          <SecondCard />
        </div>
        <div
          className="flex justify-center"
          style={{ width: "30%", height: "100%" }}
        >
          <ThirdCard />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center pt-20">
        <Card>
          <CardContent>
            <p>Total Runs: 0</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p>Total Distance: 0 km</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
