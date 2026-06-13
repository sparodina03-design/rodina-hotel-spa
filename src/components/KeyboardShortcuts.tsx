"use client";

import { useEffect } from "react";

/**
 * KeyboardShortcuts — Global keyboard shortcut listener.
 *
 * Shortcuts:
 *   Ctrl+Shift+A  (or Cmd+Shift+A on Mac) → Open admin dashboard
 *   Ctrl+Shift+L  (or Cmd+Shift+L on Mac) → Go to admin login page
 */
export default function KeyboardShortcuts() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod || !e.shiftKey) return;

      // Ctrl+Shift+A → Admin Dashboard
      if (e.key === "A" || e.key === "a") {
        e.preventDefault();
        window.location.href = "/admin-hotel/dashboard";
        return;
      }

      // Ctrl+Shift+L → Admin Login
      if (e.key === "L" || e.key === "l") {
        e.preventDefault();
        window.location.href = "/admin-hotel";
        return;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
