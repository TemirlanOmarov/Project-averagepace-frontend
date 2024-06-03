export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  return `${hours}h ${minutes > 0 ? minutes + 'm' : ''}`;
}
