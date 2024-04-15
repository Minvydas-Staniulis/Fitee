export interface BackgroundImageProps {
  backgroundImage: string;
}

export interface Running {
  id: number;
  name: string;
  distance: number;
  running_time: string;
  pace: number;
}

export type NewRunning = {
  name: string;
  distance: number;
  running_time: string;
};
