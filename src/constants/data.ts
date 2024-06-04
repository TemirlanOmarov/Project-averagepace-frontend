export interface RunningItemType {
  id?: string;
  duration: number;
  date: string;
  distance: number;
  averagePace?: string;
}

export const data: RunningItemType[] = [
  {
    duration: 31 * 60 + 35,
    date: '2024-05-08',
    distance: 5190,
  },
  {
    duration: 48 * 60 + 27,
    date: '2024-03-08',
    distance: 7050,
  },
  {
    duration: 57 * 60 + 58,
    date: '2024-02-01',
    distance: 7400,
  },
];
