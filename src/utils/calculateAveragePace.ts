export function calculateAveragePace(
  duration: number,
  distanceM: number,
): string {
  const distanceKm = distanceM / 1000;

  return `${duration / distanceKm} min / km`;
  // const totalSeconds = (duration / distance) * 1000;

  // const minutes = Math.floor(totalSeconds / 60);

  // const seconds = Math.floor(totalSeconds % 60);
  // const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  // return `${minutes}:${secondsStr}`;
}
