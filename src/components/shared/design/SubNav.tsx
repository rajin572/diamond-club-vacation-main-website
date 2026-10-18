"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll-to-section";
import type { DesignLink } from "./types";

interface SubNavProps {
  items: DesignLink[];
  label?: string;
}

/**
 * Floating sticky pill navigation under a hero (client design: `.subnav`).
 * Stays persistent on scroll and across all sub-pages, with smooth anchor scrolling
 * and active state indicator.
 */
export function SubNav({ items, label = "Page sections" }: SubNavProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Sync the highlighted tab with the URL hash once the page is on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveHash(window.location.hash);

    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    // Observe in-page sections so the active tab updates as the user scrolls
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: [0.2] }
    );

    items.forEach((item) => {
      const hash = item.href.startsWith("#")
        ? item.href.slice(1)
        : item.href.includes("#") && item.href.startsWith(pathname + "#")
        ? item.href.split("#")[1]
        : null;

      if (hash) {
        const el = document.getElementById(hash);
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [items, pathname]);

  const scrollToTarget = useCallback((targetId: string) => {
    if (scrollToSection(targetId)) setActiveHash(`#${targetId}`);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    let targetId = "";
    if (href.startsWith("#")) {
      targetId = href.slice(1);
    } else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === pathname) {
        targetId = hash;
      }
    }

    if (targetId && document.getElementById(targetId)) {
      e.preventDefault();
      scrollToTarget(targetId);
    }
  };

  const isItemActive = (itemHref: string) => {
    if (itemHref.startsWith("#")) {
      return activeHash === itemHref;
    }
    if (itemHref.includes("#")) {
      const [path, hash] = itemHref.split("#");
      if (path === pathname) {
        return activeHash === `#${hash}`;
      }
    }
    const cleanItemPath = itemHref.split("?")[0].split("#")[0];
    return pathname === cleanItemPath;
  };

  if (items.length === 0) return null;

  return (
    <nav className="dcv-subnav" aria-label={label}>
      <div className="dcv-inner">
        {items.map((item) => {
          const active = isItemActive(item.href);
          return (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={active ? "dcv-on" : undefined}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default SubNav;
