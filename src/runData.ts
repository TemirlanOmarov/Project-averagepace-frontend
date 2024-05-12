export interface RunningItem {
  duration: number;
  date: string;
  distance: number;
}

export const runData: RunningItem[] = [
  {
    duration: 31 * 60 + 35,
    date: '8 may 2024',
    distance: 5190,
  },
  {
    duration: 48 * 60 + 27,
    date: '8 may 2024',
    distance: 7050,
  },
  {
    duration: 57 * 60 + 58,
    date: '8 may 2024',
    distance: 7400,
  },
  // {
  //   duration: '21m',
  //   date: '9 nov 2024',
  //   distance: '15km',
  // },
  // {
  //   duration: '48m',
  //   date: '21 nov 2024',
  //   distance: '11km',
  // },
];
export function calculateAveragePace(
  duration: number,
  distance: number,
): string {
  const totalSeconds = (duration / distance) * 1000;

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = Math.floor(totalSeconds % (minutes * 60));

  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${secondsStr}`;
}
