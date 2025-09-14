export const asset = (p: string) => new URL(p, import.meta.env.BASE_URL).toString();
