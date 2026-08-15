// Curated, brand-safe photography sourced from the Academy's own media library
// (no baked-in marketing text or logos) — used as card imagery across
// category and course cards.
export const photoPool = [
  "/images/photos/1786454689.webp", // two colleagues reviewing a tablet, office
  "/images/photos/1786452583.webp", // woman working on a laptop
  "/images/photos/1581409163.webp", // smiling professional at a laptop
  "/images/photos/1786450030.webp", // hands reviewing a printed report
  "/images/photos/1545493916.webp", // London, Westminster Bridge at dusk
  "/images/photos/1728753070.jpg", // London, Big Ben and clouds
  "/images/photos/1729692506.jpg", // London, Big Ben
  "/images/photos/1581324752.jpg", // London, Parliament at dusk
  "/images/photos/1728666238.jpeg", // Dubai desert skyline
  "/images/photos/1728908989.png", // technology / AI visual
];

export function photoForIndex(index: number) {
  return photoPool[((index % photoPool.length) + photoPool.length) % photoPool.length];
}
