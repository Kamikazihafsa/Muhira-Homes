// src/lib/asset.ts
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");

export function asset(p: string) {
  const clean = String(p).replace(/^\/+/, ""); // no leading slash
  return `${BASE}/${clean}`;
}
