// ─── Intent Parser ────────────────────────────────────────────────────────────
// Maps user query keywords → card tag identifiers used by the Grid.

export const KEYWORD_MAP: Record<string, string> = {
  awards:    "awards",
  projects:  "projects",
  clients:   "clients",
  podcast:   "podcast",
  branding:  "projects",
  motion:    "projects",
  research:  "projects",
  work:      "projects",
  design:    "projects",
  press:     "awards",
  recognition: "awards",
};

/**
 * Given a raw query string, return the matching card tag (or null).
 * Matches the first keyword found in the query (case-insensitive).
 */
export function parseIntent(query: string): string | null {
  const lower = query.toLowerCase();
  const matched = Object.keys(KEYWORD_MAP).find((k) => lower.includes(k));
  return matched ? KEYWORD_MAP[matched] : null;
}
