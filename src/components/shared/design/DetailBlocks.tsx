import type { CSSProperties } from "react";
import type { DesignFeatureGroup, DesignStat } from "./types";

/** Four-up key facts strip (client design: `.stats`). */
export function StatsRow({ stats }: { stats: DesignStat[] }) {
  if (stats.length === 0) return null;

  return (
    <div className="dcv-stats" style={{ "--dcv-stat-cols": Math.min(stats.length, 4) } as CSSProperties}>
      {stats.map((stat) => (
        <div key={stat.label} className="dcv-stat">
          <span>{stat.label}</span>
          <b>{stat.value}</b>
        </div>
      ))}
    </div>
  );
}

/** Titled bullet list card (client design: `.featureGroup`). */
export function FeatureGroup({ group }: { group: DesignFeatureGroup }) {
  if (group.items.length === 0) return null;

  return (
    <div className="dcv-feature-group">
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
