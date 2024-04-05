import { useTotalDistance } from "../../../hooks/useTotalDistance";

export default function Workouts() {
  const totalDistance = useTotalDistance();

  return (
    <div>
      <p>Total distance: {totalDistance.toString()}</p>
    </div>
  );
}
