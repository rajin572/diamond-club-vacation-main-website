/**
 * Returns `items` starting from index `by` (wrapping around), so several detail pages that share one
 * photo set each open on a different first photo.
 */
export function rotate<T>(items: T[], by: number): T[] {
  if (items.length === 0) return items;
  const shift = ((by % items.length) + items.length) % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
}
