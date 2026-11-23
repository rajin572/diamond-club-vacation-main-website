/** "Book this room ↗" / "Book your stay ↗": opens the hotel's own booking site (Marriott for Casa Nizuc) in a new tab. */
export function BookRoomButton({ href, label = "Book this room", title }: { href: string; label?: string; title?: string }) {
  return (
    <a
      className="dcv-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title ? `${label}: ${title} (opens in a new tab)` : `${label} (opens in a new tab)`}
    >
      {label} ↗
    </a>
  );
}
