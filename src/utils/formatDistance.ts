export function formatDistance(distance: number): string {
  if (distance < 1000) {
    return `${distance}m`;
  } else {
    const killometers = distance / 1000;
    return `${killometers.toFixed(1)} km`;
  }
}
