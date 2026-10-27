import type { ReactNode } from "react";

/** "Name: text" becomes a bold lead-in followed by the text, like the packet's lists. */
export function Lead({ text, caps }: { text: string; caps?: boolean }) {
  const at = text.indexOf(": ");
  if (at < 0) return <>{text}</>;
  return (
    <>
      <strong className={caps ? "dcv-cn-caps" : undefined}>{text.slice(0, at)}</strong> — {text.slice(at + 2)}
    </>
  );
}

/** A table (the same table style as the weddings page). */
export function PopupTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="dcv-wedding-table-wrap">
      <table className="dcv-wedding-table">
        <thead>
          <tr>
            {head.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr key={rowIndex}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
