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
